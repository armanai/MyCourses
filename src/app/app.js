import React from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Switch } from 'react-router-dom'
import BasePage from './pages/BasePage'
import withAuthorization from './pages/withAuthorization'
import Alert from './components/Alert/alert.component'

const SecuredAppPage = withAuthorization()(BasePage)

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Alert />
				<Switch>
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route path='/' component={SecuredAppPage} />
				</Switch>
			</React.Fragment>
		)
	}
}
