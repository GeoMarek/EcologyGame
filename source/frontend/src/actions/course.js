import axios from 'axios'
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
    JOIN_COURSE_FAIL,
} from './types'

export const get_all_courses = () => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            //Authorization: `JWT ${localStorage.getItem('access')}`,
            //Accept: 'application/json',
        },
    }

    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/course/course/`,
            config
        )

        dispatch({
            type: GET_ALL_COURSES_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_COURSES_FAIL,
        })
    }
}

export const get_the_courses = (a1) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/course/courses/?a1=${a1}`,
            config
        )

        dispatch({
            type: GET_ALL_COURSES_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_COURSES_FAIL,
        })
    }
}

export const get_course_by_id = (id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/course/course_by_id/?id=${id}`,
            config
        )

        dispatch({
            type: GET_COURSE_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: GET_COURSE_FAIL,
        })
    }
}

export const create_course =
    (title, description, is_public, user_id) => async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            title: title,
            description: description,
            is_public: is_public,
            admins: [user_id],
        })

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/course/course/`,
                body,
                config
            )

            dispatch({
                type: CREATE_COURSE_SUCCESS,
                payload: res.data,
            })
            return res.data
        } catch (err) {
            dispatch({
                type: CREATE_COURSE_FAIL,
            })
        }
    }

export const join_course = (id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    const body = JSON.stringify({
        course_id: id,
    })

    try {
        await axios.put(
            `${process.env.REACT_APP_API_URL}/course/join_course/`,
            body,
            config
        )

        dispatch({
            type: JOIN_COURSE_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: JOIN_COURSE_FAIL,
        })
    }
}

export const delete_course_by_id = (id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
            Accept: 'application/json',
        },
    }

    try {
        await axios.delete(
            `${process.env.REACT_APP_API_URL}/course/course_by_id/?id=${id}`,
            config
        )

        dispatch({
            type: DELETE_COURSE_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: DELETE_COURSE_FAIL,
        })
    }
}
