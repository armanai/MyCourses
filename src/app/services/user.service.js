import axios from 'axios'

import { API_ROOT, setAuthHeader } from './config'

export default class UsersService {
	static login(email, password) {
		return axios.post(`${API_ROOT}/user/login`, { email, password })
	}

	static register(email, password, firstName, lastName) {
		return axios.post(`${API_ROOT}/user/register`, {
			email,
			password,
			firstName,
			lastName
		})
	}

	static loadFromToken(token) {
		return axios.get(`${API_ROOT}/user/token`, {
			params: { token },
			headers: setAuthHeader(token)
		})
	}
}
