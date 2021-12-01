import { GET_QUIZ_SUCCESS, GET_QUIZ_FAIL } from '../actions/types'

const initialState = {
    quiz: {},
    questions: [],
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_QUIZ_SUCCESS:
            return {
                ...state,
                quiz: payload.quiz,
                questions: payload.questions,
            }
        case GET_QUIZ_FAIL:
            return {
                ...state,
                quiz: {},
                questions: [],
            }
        default:
            return state
    }
}
