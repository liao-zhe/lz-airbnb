const throttle = (fn, delay) => {
	let timer = null
	return function (...args) {
		if (timer) return
		timer = setTimeout(() => {
			fn.apply(this, args)
			timer = null
		}, delay)
	}
}

export default throttle
