import { FETCH_NEWS, UPDATE_NEWS } from './actionTypes';
import axios from 'axios';

export const fetchNews = () => {
    return (dispatch) => {
        return axios.get('https://newsapi.org/v2/everything', { 'params': { 'domains': 'washingtonpost.com,nytimes.com', 'apiKey': '758729489d09410b97af1e815878c9ec' } }).then((res) => {
            var data = res.data;
            if (data && data.status === 'ok') {
                console.log('response data', data)
                dispatch(updateNews(data));
                return{
                    type: FETCH_NEWS,
                    fetchFailed: false,
                    isFetching: true
                }
            }
        }).catch((err) => {
            console.log('%c' + err, 'color: red');
            return {
                type: FETCH_NEWS,
                fetchFailed: true,
                isFetching: false
            }
        })
    }
}

export const updateNews = (data) => {
    return {
        type: UPDATE_NEWS,
        data: data
    }
}