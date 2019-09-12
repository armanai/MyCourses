export const API_ROOT = 'http://localhost:5000/api'

export const setAuthHeader = (token = sessionStorage.getItem('jwtToken')) => {
	return { Authorization: `Bearer ${token}` }
}
