import axios from 'axios'

import { API_ROOT, setAuthHeader } from './config'

const endpoint = `${API_ROOT}/course`

export default class CourseServices {
	static addCourse(course) {
		return axios.post(endpoint, {
			course,
			headers: setAuthHeader()
		})
	}

	static updateCourse(course) {
		return axios.put(endpoint, {
			course,
			headers: setAuthHeader()
		})
	}

	static deleteCourse(id) {
		return axios.delete(`${endpoint}/${id}`, { headers: setAuthHeader() })
	}

	static getCourse(id) {
		return axios.get(`${endpoint}/single`, {
			params: { id },
			headers: setAuthHeader()
		})
	}

	static getCourses(userId) {
		return axios.get(`${endpoint}/${userId}`, { headers: setAuthHeader() })
	}
}
