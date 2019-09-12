import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'
import cx from 'classnames'

import { renderFeedback } from './utils'

export default class FormInput extends PureComponent {
	static propTypes = {
		label: P.string,
		placeholder: P.string
	}

	render() {
		const { label, placeholder, type, meta, input } = this.props

		return (
			<div className='form-group form-input'>
				<label htmlFor={label}>{label}</label>
				<input
					{...input}
					type={type}
					className='form-control'
					id={label}
					placeholder={placeholder}
				/>
				{meta.touched && renderFeedback(meta)}
			</div>
		)
	}
}
