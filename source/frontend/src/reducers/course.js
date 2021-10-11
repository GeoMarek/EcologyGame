const initialState = {
    kursy: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case 'ok zaladowanie kursow':
            return {
                ...state,
                kursy: payload,
            }
        default:
            return {
                ...state,
                kursy: [],
            }
    }
}
