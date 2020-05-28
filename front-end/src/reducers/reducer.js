import { 
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
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
        username: '',
        role: ''
    },
    success: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_START:
            return state;
        case FETCH_USER_SUCCESS:
            return state;
        case FETCH_USER_FAIL:
            return state;
        case FETCH_TICKETS_START:
            return state;
        case FETCH_TICKETS_SUCCESS:
            return state;
        case FETCH_TICKETS_FAIL:
            return state;
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