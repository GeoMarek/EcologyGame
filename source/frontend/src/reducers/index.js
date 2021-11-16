import { combineReducers } from 'redux'
import auth from './auth'
import course from './course'
import profile from './profile'
import character from './character'

export default combineReducers({
    auth,
    course,
    profile,
    character,
})
