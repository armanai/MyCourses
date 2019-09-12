import React, { Component } from 'react'
import RegisterForm from '../forms/RegisterForm/register-form'
import { register } from '../actions/user.action'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class RegisterPage extends Component {
	render() {
		const { isAuthenticated } = this.props.user

		if (isAuthenticated) {
			return <Redirect to='/' />
		}

		return (
			<div className='loginPage'>
				<RegisterForm
					onSubmit={this._handleSubmit}
					redirectToLogin={this._redirectToLogin}></RegisterForm>
			</div>
		)
	}

	_handleSubmit = ({ email, password, firstName, lastName }) => {
		this.props.dispatch(register(email, password, firstName, lastName))
	}

	_redirectToLogin = () => {
		this.props.history.push('/login')
	}
}

function mapStateToProps(state) {
	const { user } = state

	return { user }
}

export default connect(mapStateToProps)(RegisterPage)
