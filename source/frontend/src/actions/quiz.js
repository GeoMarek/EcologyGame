import axios from 'axios'
import { GET_QUIZ_SUCCESS, GET_QUIZ_FAIL } from './types'

export const get_quiz = (course_id, quiz_id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/course/${course_id}/doquiz/${quiz_id}/`,
            config
        )

        dispatch({
            type: GET_QUIZ_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: GET_QUIZ_FAIL,
        })
    }
}
