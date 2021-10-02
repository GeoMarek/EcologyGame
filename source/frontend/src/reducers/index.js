import { combineReducers } from 'redux'
import auth from './auth'
import course from './course'
import profile from './profile'

export default combineReducers({
    auth,
    course,
    profile,
})
