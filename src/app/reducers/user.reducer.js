import {
	USER_LOGIN,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_ERROR,
	USER_REGISTER,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_ERROR,
	USER_FROM_TOKEN,
	USER_FROM_TOKEN_SUCCESS,
	USER_FROM_TOKEN_ERROR,
	USER_LOGOUT
} from '../actions/types'

const initialState = {
	data: null,
	isLoading: false,
	isAuthenticated: false,
	error: null
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
		case USER_REGISTER:
			return { ...state, isLoading: true, isAuthenticated: false }
		case USER_LOGIN_SUCCESS:
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload.user.data,
				isAuthenticated: true
			}
		case USER_FROM_TOKEN:
			return {
				...state,
				isLoading: true,
				isAuthenticated: false
			}
		case USER_FROM_TOKEN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				data: action.payload.user.data,
				isLoading: false
			}
		case USER_FROM_TOKEN_ERROR:
			return {
				...state,
				isAuthenticated: false,
				data: null,
				isLoading: false
			}
		case USER_LOGIN_ERROR:
		case USER_REGISTER_ERROR:
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				error: action.payload.error
			}
		case USER_LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				data: null
			}
		default:
			return state
	}
}

export default user
