const requiredFieldMessage = 'This field is required.'

export function validate(values) {
	const errors = {}

	if (!values.name) {
		errors.name = requiredFieldMessage
	}

	if (!values.credits) {
		errors.credits = requiredFieldMessage
	}

	if (!values.instructorName) {
		errors.instructorName = requiredFieldMessage
	}

	return errors
}
