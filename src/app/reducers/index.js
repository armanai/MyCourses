import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import alertReducer from './alert.reducer'
import courseReducer from './course.reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	user: userReducer,
	alert: alertReducer,
	courses: courseReducer,
	form: formReducer
})

export default rootReducer
