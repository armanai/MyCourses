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
} from '../actions/types'

const initialState = {
	courses: [],
	isLoading: false,
	course: null,
	error: null
}

const courses = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COURSE:
		case EDIT_COURSE:
		case DELETE_COURSE:
		case GET_COURSE:
		case GET_COURSES:
			return { ...state, isLoading: true, course: null }
		case ADD_COURSE_SUCCESS:
			return {
				...state,
				isLoading: false,
				courses: [...state.courses, action.payload.course]
			}
		case EDIT_COURSE_SUCCESS:
			return {
				...state,
				isLoading: false,
				courses: [
					...state.courses.filter(
						course => course.id !== action.payload.data.course.id
					),
					action.payload.data.course
				]
			}
		case DELETE_COURSE_SUCCESS:
			return {
				...state,
				isLoading: false,
				courses: [
					...state.courses.filter(
						course => course.id !== action.payload.data.course.id
					)
				]
			}
		case GET_COURSE_SUCCESS:
			return { ...state, isLoading: false, course: action.payload.course }
		case GET_COURSES_SUCCESS:
			return { ...state, isLoading: false, courses: action.payload.courses }
		case COURSE_ERROR:
			return { ...state, isLoading: false, error: action.payload.error }
		default:
			return state
	}
}

export default courses
