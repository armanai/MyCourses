import { SHOW_ALERT, CLOSE_ALERT } from './types'

export function showAlert(message, isSuccess) {
	return async dispatch => {
		console.log({ message, isSuccess })
		dispatch({
			type: SHOW_ALERT,
			payload: { message, isSuccess }
		})
	}
}

export function closeAlert() {
	return async dispatch => {
		dispatch({
			type: CLOSE_ALERT
		})
	}
}
