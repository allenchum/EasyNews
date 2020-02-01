import { FETCH_NEWS, UPDATE_NEWS } from '../actionTypes'
import axios from 'axios'

const initialState = {
    articles: [],
    isFetching: false,
    fetchFailed: false,
    totalResults: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case UPDATE_NEWS:
            var data = action.data;
            console.log('updating news data:', data)
            return{
                ...state,
                isFetching: false,
                articles: data.articles,
                totalResults: data.totalResults,
                fetchFailed: false
            }
        default:
            return state
    }
}