import React, { Component } from 'react'
import EditCourseForm from '../forms/CourseForm/edit-course-form'
import { updateCourse, getCourse } from '../actions/course.action'
import { connect } from 'react-redux'

class EditCoursePage extends Component {
	componentDidMount() {
		const { id } = this.props.match.params

		this.props.dispatch(getCourse(id))
	}

	render() {
		const { course, isLoading } = this.props.courses

		if (isLoading) {
			return <div className='loader'>Loading...</div>
		}

		return (
			<div className='container content'>
				<div className='row'>
					<div className='col-12'>
						<EditCourseForm
							onSubmit={this._handleSubmit}
							initialValues={course}
						/>
					</div>
				</div>
			</div>
		)
	}

	_handleSubmit = vals => {
		this.props.dispatch(
			updateCourse(
				{
					...this.props.courses.course,
					...vals
				},
				this.props.history
			)
		)
	}
}

function mapStateToProps(state) {
	const { courses } = state

	return { courses }
}

export default connect(mapStateToProps)(EditCoursePage)
