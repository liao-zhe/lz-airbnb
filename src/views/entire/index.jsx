import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import { fetchEntireDataAction } from '@/store/modules/entire/createActions'
import { useDispatch } from 'react-redux'

const Entire = memo(() => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchEntireDataAction(0))
	}, [dispatch])
	return (
		<EntireWrapper>
			<EntireFilter />
			<EntireRooms />
		</EntireWrapper>
	)
})

export default Entire
