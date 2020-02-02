import { FETCH_NEWS, UPDATE_NEWS, SEARCH_NEWS, SHOW_LOADING } from '../actionTypes'

const initialState = {
    articles: [],
    isFetching: false,
    fetchFailed: false,
    totalResults: 0,
    showLoading: true,
    searchInputText: '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS: {
            return {
                ...state,
                isFetching: action.isFetching,
                fetchFailed: action.fetchFailed,
            }
        }
        case UPDATE_NEWS: {
            var data = action.data;
            return {
                ...state,
                isFetching: false,
                articles: data.articles,
                totalResults: data.totalResults,
                fetchFailed: false
            }
        }
        case SEARCH_NEWS: {
            console.log('SEARCH_NEWS',action.text)
            return {
                ...state,
                searchInputText: action.text
            }
        }
        case SHOW_LOADING:
            return {
                ...state,
                showLoading: action.show
            }
        default:
            return state
    }
}