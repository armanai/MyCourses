import { SHOW_ALERT, CLOSE_ALERT } from '../actions/types'

const initialState = { isSuccess: null, message: null }

const alert = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return {
				...state,
				isSuccess: action.payload.isSuccess,
				message: action.payload.message
			}
		case CLOSE_ALERT:
			return {
				...state,
				isSuccess: null,
				message: null
			}
		default:
			return state
	}
}

export default alert
