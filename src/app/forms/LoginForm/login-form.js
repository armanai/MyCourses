import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import FormInput from '../../components/FormInput/form-input.component'
import { validate } from '../validators/loginValidator'

class LoginForm extends PureComponent {
	static propTypes = {
		handleSubmit: P.func,
		redirectToRegister: P.func.isRequired
	}

	static defaultProps = {
		handleSubmit() {}
	}

	render() {
		return (
			<div className='login-form-wrapper'>
				<div className='login-form'>
					<h1>MyCourses - Log in</h1>
					<form onSubmit={this.props.handleSubmit}>
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
								Log in
							</button>
							<div className='registerOption'>
								Don't have an Account?&nbsp;
								<button
									type='button'
									onClick={this.props.redirectToRegister}
									className='btn-white'>
									Register
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default reduxForm({ form: 'login', validate })(LoginForm)
