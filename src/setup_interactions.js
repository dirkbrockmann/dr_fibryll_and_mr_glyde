import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {initialize as cartoon_init, update as cartoon_update} from "./cartoon.js"


var timer = {}

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(()=>startstop(display,config)) 
	ct.setup.update(()=>initialize(display,config))
	
	param.lattice.widget.update(()=>initialize(display,config)) 
	param.firing_frequency.widget.update(()=>cartoon_update(controls))
	param.spike_intensity.widget.update(()=>cartoon_update(controls))
}

