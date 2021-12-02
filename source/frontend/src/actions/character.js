import axios from 'axios'
import {
    LOAD_CHARACTER_SUCCESS,
    LOAD_CHARACTER_FAIL,
    BUY_ITEM_SUCCESS,
    BUY_ITEM_FAIL,
    SELL_ITEM_SUCCESS,
    SELL_ITEM_FAIL,
    PUT_ON_ITEM_SUCCESS,
    PUT_ON_ITEM_FAIL,
    PUT_OFF_ITEM_SUCCESS,
    PUT_OFF_ITEM_FAIL,
} from '../actions/types'

export const load_character = (course_id) => async (dispatch) => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/course/${course_id}/character/`,
                config
            )

            dispatch({
                type: LOAD_CHARACTER_SUCCESS,
                payload: res.data,
            })
        } catch (err) {
            dispatch({
                type: LOAD_CHARACTER_FAIL,
            })
        }
    } else {
        dispatch({
            type: LOAD_CHARACTER_FAIL,
        })
    }
}

export const buy_item = (course_id, item_id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    const body = JSON.stringify({
        fun_type: 'buy_eq',
        item_id: item_id,
    })

    try {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/course/${course_id}/character/eq/`,
            body,
            config
        )

        dispatch({
            type: BUY_ITEM_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: BUY_ITEM_FAIL,
        })
    }
}

export const sell_item = (course_id, item_id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    const body = JSON.stringify({
        fun_type: 'sell_eq',
        item_id: item_id,
    })

    try {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/course/${course_id}/character/eq/`,
            body,
            config
        )

        dispatch({
            type: SELL_ITEM_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: SELL_ITEM_FAIL,
        })
    }
}

export const put_on_item = (course_id, item_id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    const body = JSON.stringify({
        fun_type: 'put_on',
        item_id: item_id,
    })

    try {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/course/${course_id}/character/eq/`,
            body,
            config
        )

        dispatch({
            type: PUT_ON_ITEM_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: PUT_ON_ITEM_FAIL,
        })
    }
}

export const put_off_item = (course_id, item_id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    const body = JSON.stringify({
        fun_type: 'put_off',
        item_id: item_id,
    })

    try {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/course/${course_id}/character/eq/`,
            body,
            config
        )

        dispatch({
            type: PUT_OFF_ITEM_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: PUT_OFF_ITEM_FAIL,
        })
    }
}
