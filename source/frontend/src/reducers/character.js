import {
    LOAD_CHARACTER_SUCCESS,
    LOAD_CHARACTER_FAIL,
    UPDATE_CHARACTER_SUCCESS,
    UPDATE_CHARACTER_FAIL,
} from '../actions/types'

const initialState = {
    character: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOAD_CHARACTER_SUCCESS:
        case UPDATE_CHARACTER_SUCCESS:
            return {
                ...state,
                character: payload.characters,
            }
        case LOAD_CHARACTER_FAIL:
            return {
                ...state,
                character: [],
            }
        case UPDATE_CHARACTER_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}
