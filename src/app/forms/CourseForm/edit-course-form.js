import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'
import { reduxForm } from 'redux-form'
import CourseForm from './course-form'
import { validate } from '../validators/courseValidator'

class EditCourseForm extends PureComponent {
	static propTypes = {
		handleSubmit: P.func
	}

	static defaultProps = {
		handleSubmit() {}
	}

	render() {
		return <CourseForm type='edit' handleSubmit={this.props.handleSubmit} />
	}
}

export default reduxForm({ form: 'editCourse', validate })(EditCourseForm)
