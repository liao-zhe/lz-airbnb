import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchEntireDataAction } from '@/store/modules/entire/createActions'

const EntirePaginition = memo(props => {
	const { totalCount, currentPage } = useSelector(
		state => ({
			totalCount: state.entire.totalCount,
			currentPage: state.entire.currentPage
		}),
		shallowEqual
	)
	const count = Math.ceil(totalCount / 20)
	const start = currentPage * 20 + 1
	const end = (currentPage + 1) * 20

	const dispatch = useDispatch()
	const pageChangeHandler = (event, newPage) => {
		window.scroll(0, 0)
		dispatch(fetchEntireDataAction(newPage - 1))
	}
	return (
		<EntirePaginationWrapper>
			<div className="page-info">
				<Pagination count={count} onChange={pageChangeHandler} />
				<div className="info">
					第{start}个 - 第{end}个房源，共超过{totalCount}个
				</div>
			</div>
		</EntirePaginationWrapper>
	)
})

export default EntirePaginition
