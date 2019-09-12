import React from 'react'

export function renderFeedback({ error, warning }) {
	const errorMessage = error && <div className='invalid-feedback'>{error}</div>
	const warningMessage = warning && (
		<div className='invalid-feedback'>{warning}</div>
	)

	return errorMessage || warningMessage
}

export function isInvalid({ error, touched }) {
	return touched && error
}
