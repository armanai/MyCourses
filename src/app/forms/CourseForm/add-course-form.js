import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'
import { reduxForm } from 'redux-form'
import CourseForm from './course-form'
import { validate } from '../validators/courseValidator'

class AddCourseForm extends PureComponent {
	static propTypes = {
		handleSubmit: P.func
	}

	static defaultProps = {
		handleSubmit() {}
	}

	render() {
		return <CourseForm type='add' handleSubmit={this.props.handleSubmit} />
	}
}

export default reduxForm({ form: 'addCourse', validate })(AddCourseForm)
