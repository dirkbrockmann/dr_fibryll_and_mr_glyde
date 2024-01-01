import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import styles from "./styles.module.css"

const T = [0,10];

const sc_x = d3.scaleLinear().domain(T).range([0, cfg.cartoon.width]);
const sc_y = d3.scaleLinear().domain([0,1.8]).range([0,-cfg.cartoon.height]);
const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");

const line = d3.line()
    .x(function(d) { return sc_x(d.x); })
    .y(function(d) { return sc_y(d.y); });
	
const spiketrain = (S,T) => {
	
	let t = 0,y = 0, dt = 0.05;		
	let spt = [{x:t,y:y}];
	let spikes = [];
	while(t<T){
		t+=dt
		y = y + dt * (S - y);
		if (y>1) {
			y=0;
			spikes.push(t)
		}
		spt.push({x:t,y:y})
	}
	return {spiketrain:spt,spikes:spikes}
}


const initialize = (controls,grid) => {
		
	const pos=grid.position(cfg.cartoon.anchor.x,cfg.cartoon.anchor.y);		
	const fs = cfg.cartoon.fontsize;
	const S = param.firing_frequency.widget.value()
	const delta = param.spike_intensity.widget.value()
	
	const curve = spiketrain(S,T[1])
	
	const plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+pos.x+","+pos.y+")")
	
	plot.append("g").call(xAxis).attr("class",styles.xaxis);
	plot.append("g").call(yAxis).attr("class",styles.yaxis);
	
	plot.append("text").text("time").attr("transform","translate("+sc_x((T[1]-T[0])/2)+","+20+")")
		
	plot.append("text").text("charge").attr("transform","translate("+(-15)+","+(sc_y(1))+")rotate(-90)")

	plot.append("path").datum([{x:T[0],y:1},{x:T[1],y:1}]).attr("d",line).attr("class",styles.threshold)
	
	plot.append("path").datum([{x:0,y:S},{x:10,y:S}]).attr("d",line)
		.attr("class",styles.chargelevel)
		.attr("id","max_charge")
	
	plot.append("path").datum(curve.spiketrain).attr("d",line)
		.attr("class",styles.spiketrain)
	
	plot.selectAll("."+styles.spike).data(curve.spikes).enter().append("line")
		.attr("class",styles.spike)
		.attr("x1",function(d){return sc_x(d)})
		.attr("x2",function(d){return sc_x(d)})
		.attr("y1",function(d){return sc_y(1)})
		.attr("y2",function(d){return sc_y(1+delta)})
		
	
}

const update = (controls) => {

	const S = param.firing_frequency.widget.value()
	const delta = param.spike_intensity.widget.value()
	const curve = spiketrain(S,T[1])
	
	controls.select("."+styles.plot).select("#max_charge").datum([{x:0,y:S},{x:10,y:S}]).attr("d",line)
	controls.select("."+styles.plot).select("."+styles.spiketrain).datum(curve.spiketrain).attr("d",line)
	const nuck = controls.select("."+styles.plot).selectAll("."+styles.spike).data(curve.spikes)
		.attr("x1",function(d){return sc_x(d)})
		.attr("x2",function(d){return sc_x(d)})
		.attr("y1",function(d){return sc_y(1)})
		.attr("y2",function(d){return sc_y(1+delta)})
	
	nuck.enter().append("line").attr("class",styles.spike)
	.attr("x1",function(d){return sc_x(d)})
	.attr("x2",function(d){return sc_x(d)})
	.attr("y1",function(d){return sc_y(1)})
	.attr("y2",function(d){return sc_y(1+delta)})
	
	nuck.exit().remove()
	
}

export {initialize,update}

