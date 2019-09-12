import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import FormInput from '../../components/FormInput/form-input.component'
import { validate } from '../validators/registerValidator'

class RegisterForm extends PureComponent {
	static propTypes = {
		handleSubmit: P.func,
		redirectToLogin: P.func.isRequired
	}

	static defaultProps = {
		handleSubmit() {}
	}

	render() {
		return (
			<div className='login-form-wrapper'>
				<div className='login-form'>
					<h1>MyCourses - Register</h1>
					<form onSubmit={this.props.handleSubmit}>
						<Field
							name='firstName'
							component={FormInput}
							type='text'
							label='First name'
						/>
						<Field
							name='lastName'
							component={FormInput}
							type='text'
							label='Last name'
						/>
						<Field
							name='email'
							component={FormInput}
							type='email'
							label='E-mail'
						/>
						<Field
							name='password'
							component={FormInput}
							type='password'
							label='Password'
						/>
						<div className='loginFooter d-flex align-items-center justify-content-between'>
							<button type='submit' className='btn btn-primary'>
								Register
							</button>
							<div className='registerOption'>
								Have an Account?&nbsp;
								<button
									type='button'
									onClick={this.props.redirectToLogin}
									className='btn-white'>
									Log in
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default reduxForm({ form: 'register', validate })(RegisterForm)
