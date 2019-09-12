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
} from './types'

import UserService from '../services/user.service'
import { reset } from 'redux-form'
import { showAlert } from './alert.action'

export function login(email, password) {
	return async dispatch => {
		try {
			dispatch({ type: USER_LOGIN })

			const response = await UserService.login(email, password)

			sessionStorage.setItem('jwtToken', response.data.token)

			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: response.data
			})

			dispatch(showAlert('Login successfull', true))
		} catch (ex) {
			dispatch({
				type: USER_LOGIN_ERROR,
				payload: ex
			})

			dispatch(reset('login'))

			if (ex.response.status === 401) {
				dispatch(showAlert('Email or password incorrect', false))
			} else {
				dispatch(showAlert('Login failed. Try again.', false))
			}
		}
	}
}

export function logout() {
	return async dispatch => {
		dispatch({ type: USER_LOGOUT })

		sessionStorage.removeItem('jwtToken')
	}
}

export function register(email, password, firstName, lastName) {
	return async dispatch => {
		try {
			dispatch({ type: USER_REGISTER })

			const response = await UserService.register(
				email,
				password,
				firstName,
				lastName
			)

			sessionStorage.setItem('jwtToken', response.data.token)

			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: response.data
			})

			dispatch(
				showAlert(
					`Welcome ${firstName}! Your registration was successful!`,
					true
				)
			)
		} catch (ex) {
			dispatch({
				type: USER_REGISTER_ERROR,
				payload: ex
			})

			dispatch(reset('register'))

			dispatch(showAlert('Registration failed', false))
		}
	}
}

export function loadFromToken() {
	return async dispatch => {
		try {
			const token = sessionStorage.getItem('jwtToken')

			if (!token || token === '') {
				return
			}

			dispatch({ type: USER_FROM_TOKEN })

			const response = await UserService.loadFromToken(token)

			sessionStorage.setItem('jwtToken', response.data.token)

			dispatch({ type: USER_FROM_TOKEN_SUCCESS, payload: response.data })
		} catch (error) {
			dispatch({ type: USER_FROM_TOKEN_ERROR, payload: error })

			sessionStorage.removeItem('jwtToken')

			if (error.response.status === 401) {
				console.log('Expired')
			} else {
				console.log("'Failed tok'")
			}
		}
	}
}
