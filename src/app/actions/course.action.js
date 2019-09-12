import {
	ADD_COURSE,
	ADD_COURSE_SUCCESS,
	EDIT_COURSE,
	EDIT_COURSE_SUCCESS,
	DELETE_COURSE,
	DELETE_COURSE_SUCCESS,
	GET_COURSE,
	GET_COURSE_SUCCESS,
	GET_COURSES,
	GET_COURSES_SUCCESS,
	COURSE_ERROR
} from './types'

import CourseServices from '../services/course.service'
import { showAlert } from './alert.action'

export function getCourse(id) {
	return async dispatch => {
		try {
			dispatch({ type: GET_COURSE })

			const response = await CourseServices.getCourse(id)

			dispatch({
				type: GET_COURSE_SUCCESS,
				payload: response.data
			})
		} catch (ex) {
			dispatch({
				type: COURSE_ERROR,
				payload: ex
			})
		}
	}
}

export function getCourses(userId) {
	return async dispatch => {
		try {
			dispatch({ type: GET_COURSES })

			const response = await CourseServices.getCourses(userId)

			dispatch({
				type: GET_COURSES_SUCCESS,
				payload: response.data
			})
		} catch (ex) {
			dispatch({
				type: COURSE_ERROR,
				payload: ex
			})
		}
	}
}

export function deleteCourse(id) {
	return async dispatch => {
		try {
			dispatch({ type: DELETE_COURSE })

			const response = await CourseServices.deleteCourse(id)

			dispatch({
				type: DELETE_COURSE_SUCCESS,
				payload: response.data
			})

			dispatch(showAlert('Course successfully deleted.', true))
		} catch (ex) {
			dispatch(showAlert('Something went wrong.', false))

			dispatch({
				type: COURSE_ERROR,
				payload: ex
			})
		}
	}
}

export function updateCourse(course, history = null) {
	return async dispatch => {
		try {
			dispatch({ type: EDIT_COURSE })

			const response = await CourseServices.updateCourse(course)

			if (history) {
				history.push('/')
			}

			dispatch({
				type: EDIT_COURSE_SUCCESS,
				payload: response.data
			})

			dispatch(showAlert('Course successfully updated.', true))
		} catch (ex) {
			dispatch(showAlert('Something went wrong.', false))

			dispatch({
				type: COURSE_ERROR,
				payload: ex
			})
		}
	}
}

export function addCourse(course, history = null) {
	return async dispatch => {
		try {
			dispatch({ type: ADD_COURSE })

			const response = await CourseServices.addCourse(course)

			if (history) {
				history.push('/')
			}

			dispatch({
				type: ADD_COURSE_SUCCESS,
				payload: response.data
			})

			dispatch(showAlert('Course successfully added.', true))
		} catch (ex) {
			dispatch(showAlert('Something went wrong.', false))

			dispatch({
				type: COURSE_ERROR,
				payload: ex
			})
		}
	}
}
