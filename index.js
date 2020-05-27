import dynamicParticle from "./dynamic-particle"

export default background = function (id) {
	let backgroundList = {
		dynamicParticle
	}

	function render(name) {
		return backgroundList[name](id)
	}
}