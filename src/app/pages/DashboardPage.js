import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableHeader from '../components/Table/header.component'
import Table from '../components/Table/table.component'
import { getCourses, deleteCourse } from '../actions/course.action'

class DashboardPage extends Component {
	componentDidMount() {
		this.props.dispatch(getCourses(this.props.user.data.id))
	}

	render() {
		const { courses, isLoading } = this.props.courses

		if (isLoading) {
			return <div className='loader'>Loading...</div>
		}

		return (
			<div className='container content'>
				<div className='row'>
					<div className='col-12'>
						<Table rows={courses}>
							<TableHeader label='ID' dataID='id' key='id' />
							<TableHeader label='Course name' dataID='name' key='name' />
							<TableHeader label='Credits' dataID='credits' key='credits' />
							<TableHeader
								label='Instructor name'
								dataID='instructorName'
								key='instructor'
							/>
							<TableHeader cellRenderer={this._actionsRenderer}>
								<button
									className='btn-primary'
									type='button'
									onClick={this._handleAddCourse}>
									Add Course
								</button>
							</TableHeader>
						</Table>
					</div>
				</div>
			</div>
		)
	}

	_actionsRenderer = ({ row }) => {
		return (
			<div>
				<button
					className='action-btn'
					onClick={() => this._handleEditCourse(row.id)}>
					Edit
				</button>
				<button
					className='action-btn delete'
					onClick={() => this._handleDeleteCourse(row.id)}>
					Delete
				</button>
			</div>
		)
	}

	_handleDeleteCourse = id => {
		this.props.dispatch(deleteCourse(id, this.props.history))
	}

	_handleEditCourse = id => {
		this.props.history.push(`/course/edit/${id}`)
	}

	_handleAddCourse = () => {
		this.props.history.push('/course/add')
	}
}

function mapStateToProps(state) {
	const { courses, user } = state

	return { courses, user }
}

export default connect(mapStateToProps)(DashboardPage)
