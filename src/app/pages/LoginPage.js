import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm/login-form'
import { connect } from 'react-redux'
import { login } from '../actions/user.action'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
	render() {
		const { isAuthenticated } = this.props.user

		if (isAuthenticated) {
			return <Redirect to='/' />
		}

		return (
			<div className='loginPage'>
				<LoginForm
					onSubmit={this._handleSubmit}
					redirectToRegister={this._redirectToRegister}></LoginForm>
			</div>
		)
	}

	_handleSubmit = ({ email, password }) => {
		this.props.dispatch(login(email, password))
	}

	_redirectToRegister = () => {
		this.props.history.push('/register')
	}
}

function mapStateToProps(state) {
	const { user } = state

	return { user }
}

export default connect(mapStateToProps)(LoginPage)
