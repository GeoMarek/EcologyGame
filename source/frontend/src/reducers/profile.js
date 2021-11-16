import {
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
} from '../actions/types'

const initialState = {
    profile: [],
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOAD_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: payload.profile,
            }
        case LOAD_PROFILE_FAIL:
            return {
                ...state,
                profile: [],
            }
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}
