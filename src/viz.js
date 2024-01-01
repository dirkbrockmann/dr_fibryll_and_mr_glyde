import * as d3 from "d3"
import param from "./parameters.js"
import cfg from "./config.js"
import {each} from "lodash-es"
import {agents} from "./model.js"
import colors from "./colormaps.js"

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

var ctx,W,H;

const paint = colors[cfg.simulation.colormap];

function draw_rect(){

	each(agents,d=>{
		const c = d.cell();
		const l = c.length;		
		const color = param.show_only_spikes.widget.value()==false ? paint(d.theta) : d.spike==true ? paint(0) : paint(0.5)

		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
}

function draw_path(){

	each(agents,d=>{
		const c = d.cell();
		const l = c.length;
		const color = param.show_only_spikes.widget.value()==false ? paint(d.theta) : d.spike==true ? paint(0) : paint(0.5)
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;

		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		ctx.fill();
		ctx.stroke()
		ctx.closePath();
	})
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	

	go(display,config)
	
};

const go = (display,config) => {
		
	ctx.clearRect(0, 0, W, H);
	param.lattice.widget.value()==0 ? draw_rect() : draw_path()
}

const update = (display,config) => {}


export {initialize,go,update}
