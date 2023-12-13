// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,filter} from "lodash-es"
//import {rad2deg,deg2rad} from "./utils"
import * as lattices from "lattices"

const L = param.L;
const dt = param.dt;

// typically objects needed for the explorable
// are defined here

var agents = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents
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

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

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

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,initialize,go,update}
