import { GET_QUIZ_SUCCESS, GET_QUIZ_FAIL } from '../actions/types'

const initialState = {
    quiz: {},
    questions: [],
    approaches: [],
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
                approaches: payload.approaches,
            }
        case GET_QUIZ_FAIL:
            return {
                ...state,
                quiz: {},
                questions: [],
                approaches: [],
            }
        default:
            return state
    }
}
