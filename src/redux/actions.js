import { FETCH_NEWS, UPDATE_NEWS, SHOW_LOADING, SEARCH_NEWS, CHANGE_PAGE } from './actionTypes';
import axios from 'axios';

export const fetchNews = (pageSize, currPage) => {
    return (dispatch) => {
        dispatch(showLoading(true));
        return axios.get('https://newsapi.org/v2/everything', { 'params': { 'domains': 'washingtonpost.com,nytimes.com', 'apiKey': '758729489d09410b97af1e815878c9ec', 'pageSize': pageSize, 'page': currPage } }).then((res) => {
            var data = res.data;
            if (data && data.status === 'ok') {
                dispatch(updateNews(data));
                dispatch(showLoading(false))
                dispatch(() => ({
                    type: FETCH_NEWS,
                    fetchFailed: false,
                    isFetching: true
                }))
            }
        }).catch((err) => {
            console.log('%c' + err, 'color: red');
            dispatch(showLoading(false))
            dispatch(() => ({
                type: FETCH_NEWS,
                fetchFailed: true,
                isFetching: false
            }))
        })
    }
}

export const updateNews = (data) => {
    return {
        type: UPDATE_NEWS,
        data: data
    }
}

export const showLoading = (show) => {
    return {
        type: SHOW_LOADING,
        show: show
    }
}

export const searchNews = (text) => {
    return {
        type: SEARCH_NEWS,
        text: text
    }
}

export const changePage = (pageSize, index) => {
    return {
        type: CHANGE_PAGE,
        pageIndex: index,
    }
}