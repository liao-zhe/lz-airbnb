import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollTop = () => {
	const location = useLocation()
	useEffect(() => {
		window.scroll(0, 0)
	}, [location.pathname])
}
