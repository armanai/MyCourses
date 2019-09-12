const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export function validate(values) {
	const errors = {}

	if (!values.email) {
		errors.email = 'This field is required.'
	} else if (!EMAIL_REGEX.test(values.email)) {
		errors.email = 'Enter correctly formatted email.'
	}

	if (!values.password) {
		errors.password = 'This field is required.'
	}

	return errors
}
