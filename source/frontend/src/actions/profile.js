import axios from 'axios'
import {
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
} from './types'

export const load_profile = () => async (dispatch) => {
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
                `${process.env.REACT_APP_API_URL}/profile/profile/`,
                config
            )

            dispatch({
                type: LOAD_PROFILE_SUCCESS,
                payload: res.data,
            })
        } catch (err) {
            dispatch({
                type: LOAD_PROFILE_FAIL,
            })
        }
    } else {
        dispatch({
            type: LOAD_PROFILE_FAIL,
        })
    }
}

export const update_profile =
    (first_name, last_name) => async (dispatch) => {
        if (localStorage.getItem('access')) {
            const config = {
                headers: {
                    Accept: 'application/json',
                    Authorization: `JWT ${localStorage.getItem('access')}`,
                    'Content-Type': 'application/json',
                },
            }

            const body = JSON.stringify({
                first_name,
                last_name
            })

            try {
                const res = await axios.put(
                    `${process.env.REACT_APP_API_URL}/profile/profile/`,
                    body,
                    config
                )

                dispatch({
                    type: UPDATE_PROFILE_SUCCESS,
                    payload: res.data,
                })
            } catch (err) {
                dispatch({
                    type: UPDATE_PROFILE_FAIL,
                })
            }
        } else {
            dispatch({
                type: UPDATE_PROFILE_FAIL,
            })
        }
    }
