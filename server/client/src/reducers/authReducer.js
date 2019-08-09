import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    console.log('Our action is: ', action);
    switch (action.type) {
        case FETCH_USER:
            //user model or false
            return action.payload || false;
        default:
            return state;
    }
}