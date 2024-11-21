// 派发的acitons
import { getEntireList } from '@/services/modules/entire'
import * as actionTypes from './constans'

export const changeLoadingAction = isLoading => ({
	type: actionTypes.CHANGE_ISLOADING,
	isLoading
})

export const changeRoomListAction = roomList => ({
	type: actionTypes.CHANGE_ROOM_LIST,
	roomList
})

export const fetchEntireDataAction = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(changeLoadingAction(true))
		const res = await getEntireList(page * 20, 20)
		dispatch(changeLoadingAction(false))
		dispatch(changeRoomListAction(res.list))
	}
}
