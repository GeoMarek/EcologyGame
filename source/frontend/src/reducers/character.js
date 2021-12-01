import {
    LOAD_CHARACTER_SUCCESS,
    LOAD_CHARACTER_FAIL,
    UPDATE_CHARACTER_SUCCESS,
    UPDATE_CHARACTER_FAIL,
    BUY_ITEM_SUCCESS,
    BUY_ITEM_FAIL,
    SELL_ITEM_SUCCESS,
    SELL_ITEM_FAIL,
    PUT_ON_ITEM_SUCCESS,
    PUT_ON_ITEM_FAIL,
    PUT_OFF_ITEM_SUCCESS,
    PUT_OFF_ITEM_FAIL,
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
        case BUY_ITEM_SUCCESS:
        case SELL_ITEM_SUCCESS:
        case PUT_ON_ITEM_SUCCESS:
        case PUT_OFF_ITEM_SUCCESS:
            return {
                ...state,
                characters: payload.characters,
                weapon: payload.weapon,
                armor: payload.armor,
                equipment: payload.equipment,
            }
        case BUY_ITEM_FAIL:
        case SELL_ITEM_FAIL:
        case PUT_ON_ITEM_FAIL:
        case PUT_OFF_ITEM_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}
