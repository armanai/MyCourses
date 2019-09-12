import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import EditCoursePage from './EditCoursePage'
import AddCoursePage from './AddCoursePage'
import NotFoundPage from './NotFoundPage'
import Menu from '../components/Menu/menu.component'

export default class BasePage extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Switch>
					<Route exact path='/' component={DashboardPage} />
					<Route path='/course/add' component={AddCoursePage} />
					<Route path='/course/edit/:id' component={EditCoursePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}
}
