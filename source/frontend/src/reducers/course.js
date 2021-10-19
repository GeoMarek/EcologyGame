
import {
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_FAIL,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAIL,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAIL,
    JOIN_COURSE_SUCCESS,
    JOIN_COURSE_FAIL
} from '../actions/types';


const initialState = {
    kursy: [],
    course: []
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_ALL_COURSES_SUCCESS:            
            return {
                ...state,
                kursy: payload,
            }
        case GET_ALL_COURSES_FAIL:            
            return {
                ...state,
                kursy: []
            }
        case GET_COURSE_SUCCESS:            
            return {
                ...state,
                course: payload,
            }
        case GET_COURSE_FAIL:            
            return {
                ...state,
                course: []
            }
        case CREATE_COURSE_SUCCESS:            
            return {
                ...state,
            }
        case CREATE_COURSE_FAIL:            
            return {
                ...state,
            }
        case DELETE_COURSE_SUCCESS:            
            return {
                ...state,
                course: []
            }
        case DELETE_COURSE_FAIL:            
            return {
                ...state,
            }
        case JOIN_COURSE_SUCCESS:            
            return {
                ...state,
            }
        case JOIN_COURSE_FAIL:            
            return {
                ...state,
            }
        default:            
            return {
                ...state,
            }
    }
}
