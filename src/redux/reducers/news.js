import { FETCH_NEWS } from '../actionTypes'

const initialState = {
    articles: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS: {
            return {
                ...state
            }
        }
        default:
            return state
    }
}