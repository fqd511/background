import dynamicParticle from "/dynamic-particle/demo"

export default background = function (id) {
	let backgroundList = {
		dynamicParticle
	}

	function render(name) {
		return backgroundList[name](id)
	}
}