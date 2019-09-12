import React, { Component } from 'react'
import AddCourseForm from '../forms/CourseForm/add-course-form'
import { addCourse } from '../actions/course.action'
import { connect } from 'react-redux'

class AddCoursePage extends Component {
	render() {
		return (
			<div className='container content'>
				<div className='row'>
					<div className='col-12'>
						<AddCourseForm onSubmit={this._handleSubmit} />
					</div>
				</div>
			</div>
		)
	}

	_handleSubmit = vals => {
		this.props.dispatch(
			addCourse(
				{ ...vals, userId: this.props.user.data.id },
				this.props.history
			)
		)
	}
}

function mapStateToProps(state) {
	const { user } = state

	return { user }
}

export default connect(mapStateToProps)(AddCoursePage)
