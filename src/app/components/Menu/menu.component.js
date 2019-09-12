import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user.action'

class Menu extends PureComponent {
	render() {
		const {
			user: { data }
		} = this.props

		return (
			<div className='menu d-flex justify-content-between align-items-center'>
				<div className='brand'>MyCourses</div>
				<div className='user-name'>{`${data.firstName} ${data.lastName}`}</div>
				<div>
					<button type='button' onClick={this._logOut} className='btn-white'>
						Log out
					</button>
				</div>
			</div>
		)
	}
	_logOut = () => {
		this.props.dispatch(logout())
	}
}

function mapStateToProps(state) {
	const { user } = state

	return { user }
}

export default connect(mapStateToProps)(Menu)
