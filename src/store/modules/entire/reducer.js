import * as actionTypes from './constans'

const initialState = {
	roomList: [],
	isLoading: false,
	totalCount: 0,
	currentPage: 0
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ISLOADING:
			return { ...state, isLoading: action.isLoading }
		case actionTypes.CHANGE_ROOM_LIST:
			return { ...state, roomList: action.roomList }
		case actionTypes.CHANGE_TOTAL_COUNT:
			return { ...state, totalCount: action.totalCount }
		case actionTypes.CHANGE_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		default:
			return state
	}
}

export default reducer
