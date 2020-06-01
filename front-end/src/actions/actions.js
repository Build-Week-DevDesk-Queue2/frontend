import { axiosWithAuth } from '../auth/axiosWithAuth';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const FETCH_TICKETS_START = 'FETCH_TICKETS_START';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAIL = 'FETCH_TICKETS_FAIL';

export const POST_TICKET_START = 'POST_TICKET_START';
export const POST_TICKET_SUCCESS = 'POST_TICKET_SUCCESS';
export const POST_TICKET_FAIL = 'POST_TICKET_FAIL';

export const LOG_OUT = 'LOG_OUT';

export const registerUser = credentials => dispatch => {
    dispatch({type: REGISTER_USER_START});
    axiosWithAuth()
        .post('/auth/register', credentials)
        .then(res => {
            console.log(res);
            dispatch({type: REGISTER_USER_SUCCESS});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: REGISTER_USER_FAIL});
        })
}

export const login = credentials => dispatch => {
    dispatch({type: USER_LOGIN_START});
    axiosWithAuth()
        .post('/auth/login', credentials)
        .then(res => {
            console.log(res);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: USER_LOGIN_FAIL, payload: err })
        });
}

export const logOut = () => dispatch => {
    dispatch({type: LOG_OUT});
}

export const getTickets = () => dispatch => {
    dispatch({ type: FETCH_TICKETS_START });
    axiosWithAuth()
        .get('/students/tickets')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_TICKETS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_TICKETS_FAIL, payload: err });
        });
}

export const getHelperTickets = () => dispatch => {
    dispatch({ type: FETCH_TICKETS_START});
    axiosWithAuth()
        .get('/helpers/tickets')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_TICKETS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_TICKETS_FAIL, payload: err })
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