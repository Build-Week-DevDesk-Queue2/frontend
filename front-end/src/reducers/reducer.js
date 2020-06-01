import { 
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    LOG_OUT,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    FETCH_TICKETS_START, 
    FETCH_TICKETS_SUCCESS, 
    FETCH_TICKETS_FAIL, 
    POST_TICKET_START, 
    POST_TICKET_SUCCESS, 
    POST_TICKET_FAIL 
} from '../actions/actions';

const initialState = {
    tickets: [],
    user: {
        id: '',
        username: '',
        role: ''
    },
    logging_in: false,
    registering: false,
    fetching_tickets: false,
    posting_ticket: false,
    error: '',
    logged_in: false,
    success: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_START:
            return {
                ...state,
                logging_in: true,
                error: '',
                success: ''
            };
        case USER_LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    username: action.payload.username,
                    role: action.payload.role
                },
                logging_in: false,
                logged_in: true
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                logging_in: false,
                error: 'Username or Password incorrect'
            };
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...initialState
            };
        case REGISTER_USER_START:
            return {
                ...state,
                registering: true,
                error: ''
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registering: false,
                success: 'You have successfully registered please log in'
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                registering: false,
                error: 'Sorry something went wrong'
            }
        case FETCH_TICKETS_START:
            return {
                ...state,
                fetching_tickets: true,
                error: ''
            }
        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                fetching_tickets: false,
                tickets: action.payload,
            }
        case FETCH_TICKETS_FAIL:
            return {
                ...state,
                fetching_tickets: false,
                error: 'Failed to fetch tickets'
            }
        case POST_TICKET_START:
            return state;
        case POST_TICKET_SUCCESS:
            return state;
        case POST_TICKET_FAIL:
            return state;
        default:
            return state;
    }
}