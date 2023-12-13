// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:0.05,
		L:100,
	boundary:"periodic",
		N:{hex:60,square:80},
	
		oscillator_heterogeneity: {
			range:[0,0.3],
			default:0
		},
		spike_intensity: {
			range:[0,0.6],
			default:0.5
		},
		firing_frequency:{
			range : [1.05,1.5],
			default : 1.2
		},
		lattice : {
			choices:["square","hexagonal"],
		default:1
		},
		show_only_spikes: {
		default: false
		}
}

