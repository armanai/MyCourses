import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'
import { Field } from 'redux-form'
import FormInput from '../../components/FormInput/form-input.component'

export default class CourseForm extends PureComponent {
	static propTypes = {
		handleSubmit: P.func,
		type: P.oneOf(['add', 'edit'])
	}

	static defaultProps = {
		handleSubmit() {}
	}

	render() {
		return (
			<div className='form-container'>
				<h1>{this.props.type == 'add' ? 'Add Course' : 'Edit Course'}</h1>
				<form onSubmit={this.props.handleSubmit}>
					<Field
						name='name'
						component={FormInput}
						type='text'
						label='Course name'
					/>
					<Field
						name='credits'
						component={FormInput}
						type='text'
						label='Course credits'
					/>
					<Field
						name='instructorName'
						component={FormInput}
						type='text'
						label='Instructor Name'
					/>
					<button type='submit' className='btn-primary'>
						{this.props.type == 'add' ? 'Add Course' : 'Edit Course'}
					</button>
				</form>
			</div>
		)
	}
}
