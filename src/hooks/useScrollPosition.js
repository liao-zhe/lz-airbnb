import throttle from '@/utils/throttle'
import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
	const [scrollX, setScrollX] = useState(0)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const updatePosition = throttle(() => {
			setScrollX(window.scrollX)
			setScrollY(window.scrollY)
		}, 100)
		window.addEventListener('scroll', updatePosition)
		return () => window.removeEventListener('scroll', updatePosition)
	}, [])

	return { scrollX, scrollY }
}
