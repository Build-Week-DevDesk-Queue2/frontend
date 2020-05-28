import { axiosWithAuth } from '../auth/axiosWithAuth';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const FETCH_TICKETS_START = 'FETCH_TICKETS_START';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAIL = 'FETCH_TICKETS_FAIL';

export const POST_TICKET_START = 'POST_TICKET_START';
export const POST_TICKET_SUCCESS = 'POST_TICKET_SUCCESS';
export const POST_TICKET_FAIL = 'POST_TICKET_FAIL';

export const getUser = id => dispatch => {
    dispatch({type: FETCH_USER_START});
    axiosWithAuth()
        .get(`/user/${id}`)
        .then(res => {
            dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_USER_FAIL, payload: err })
        });
}

export const getTickets = () => dispatch => {
    dispatch({ type: FETCH_TICKETS_START });
    axiosWithAuth()
        .get('/queue/open')
        .then(res => {
            dispatch({ type: FETCH_TICKETS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_TICKETS_FAIL, payload: err });
        });
}

export const postTicket = ticket => dispatch => {
    dispatch({ type: POST_TICKET_START });
    axiosWithAuth()
        .post('')
        .then(res => {
            dispatch({ type: POST_TICKET_SUCCESS, payload: res });
        })
        .catch(err => {
            dispatch({ type: POST_TICKET_FAIL, payload: err });
        });
}