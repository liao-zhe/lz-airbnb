import * as actionTypes from './constans'

const initialState = {
	roomList: [],
	isLoading: false
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_LOADING:
			return { ...state, isLoading: action.isLoading }
		case actionTypes.CHANGE_ROOM_LIST:
			return { ...state, roomList: action.roomList }
		default:
			return state
	}
}

export default reducer
