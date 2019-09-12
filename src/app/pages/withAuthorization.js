import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadFromToken } from '../actions/user.action'

export default () => WrappedComponent => {
	class SecuredPage extends Component {
		componentDidMount() {
			if (!this.props.user.isAuthenticated) {
				this.props.dispatch(loadFromToken())
			}
		}

		render() {
			const { isAuthenticated, isLoading } = this.props.user

			if (isLoading) {
				return <div>Loading...</div>
			}

			if (isAuthenticated) {
				return <WrappedComponent {...this.props} />
			} else {
				return (
					<Redirect
						to={{
							pathname: '/login',
							state: { referrer: this.props.location.pathname }
						}}
					/>
				)
			}
		}
	}

	function mapStateToProps(state) {
		return {
			user: state.user
		}
	}

	return connect(mapStateToProps)(SecuredPage)
}
