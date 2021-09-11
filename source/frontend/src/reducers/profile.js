import {
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL
} from '../actions/types';

const initialState = {
    first_name: '',
    last_name: '',
    gender: ''
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                first_name: payload.profile.first_name,
                last_name: payload.profile.last_name,
                gender: payload.profile.gender,
            }
        case LOAD_PROFILE_FAIL:
            return {
                ...state,
                first_name: '',
                last_name: '',
                gender: '',
            }
        case UPDATE_PROFILE_FAIL:
            return {
                ...state
            }
        default:
            return state
    };
};