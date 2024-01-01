import param from "./parameters.js"
import {each,filter} from "lodash-es"
import * as lattices from "lattices"

const L = param.L;
const dt = param.dt;

var agents = [];


const initialize = () => {

	param.timer={}; param.tick=0;

	const N = param.lattice.widget.value()==1 ? param.N.hex : param.N.square
	const s = lattices[param.lattice.widget.value()==1?"hex":"square"](N)
		.boundary(param.boundary)
	
	agents = s.nodes;

	each(agents,a=>{
		a.theta = Math.random();
		a.Svar = (Math.random()-0.5);
		a.spike = false;
	})
	
	
};

const go  = () => {
	
	param.tick++;
	
	const S = param.firing_frequency.widget.value();
	const sigma = param.oscillator_heterogeneity.widget.value();
	const delta = param.spike_intensity.widget.value();
	
	const silent = filter(agents,a => a.spike==false);
	const firing = filter(agents,a => a.spike==true);
	
	each(silent,d=>{
		const neighbors = d.neighbors;
		const M = neighbors.length;
		const firing_neighbors = filter(neighbors,nn=>nn.spike==true);
		const H = firing_neighbors.length / M;
		
		d.dtheta=param.dt*((S+sigma*d.Svar)-d.theta)+delta*H
	})
	
	each(firing,d=>{
		d.theta=d.theta-1;
		d.spike=false;
	})
	
	each(silent,d=>{
		d.theta+=d.dtheta;
		if(d.theta > 1) {
			d.spike=true;
		};
	})
	
}

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

export {agents,initialize,go,update}
