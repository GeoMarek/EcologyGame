import axios from 'axios'
import {
    LOAD_CHARACTER_SUCCESS,
    LOAD_CHARACTER_FAIL,
    UPDATE_CHARACTER_SUCCESS,
    UPDATE_CHARACTER_FAIL,
} from './types'

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
                `${process.env.REACT_APP_API_URL}/course/course/${course_id}/character/`,
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
