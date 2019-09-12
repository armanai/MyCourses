import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { closeAlert } from '../../actions/alert.action'

const DELAY_TIME = 3000

export class Alert extends Component {
	render() {
		this._setTimer()

		return <div>{this.props.alert.message && this._renderAlert()}</div>
	}

	_renderAlert() {
		const { message, isSuccess } = this.props.alert
		const className = cx('alert fade show animated', {
			success: isSuccess,
			failure: !isSuccess
		})

		return <div className={className}>{message}</div>
	}

	_handleCloseAlert = () => {
		this.props.dispatch(closeAlert())
	}

	_setTimer = () => {
		this._timer != null ? clearTimeout(this._timer) : null
		this._timer = setTimeout(() => {
			this._handleCloseAlert()
		}, DELAY_TIME)
	}
}

function mapStateToProps(state) {
	const { alert } = state

	return { alert }
}

export default connect(mapStateToProps)(Alert)
