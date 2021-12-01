import { combineReducers } from 'redux'
import auth from './auth'
import course from './course'
import profile from './profile'
import character from './character'
import quiz from './quiz'

export default combineReducers({
    auth,
    course,
    profile,
    character,
    quiz,
})
