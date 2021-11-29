import {
    LOAD_CHARACTER_SUCCESS,
    LOAD_CHARACTER_FAIL,
    UPDATE_CHARACTER_SUCCESS,
    UPDATE_CHARACTER_FAIL,
} from '../actions/types'

const initialState = {
    characters: [[]],
    weapon: null,
    armor: null,
    equipment: [],
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOAD_CHARACTER_SUCCESS:
        case UPDATE_CHARACTER_SUCCESS:
            return {
                ...state,
                characters: payload.characters,
                weapon: payload.weapon,
                armor: payload.armor,
                equipment: payload.equipment,
            }
        case LOAD_CHARACTER_FAIL:
            return {
                ...state,
                characters: [[]],
                weapon: null,
                armor: null,
                equipment: [],
            }
        case UPDATE_CHARACTER_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}
