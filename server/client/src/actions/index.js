import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    //redux thunk will pass dispatch as an argument
    return function(dispatch) {
        axios.get('/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res}))
    }             
};
        
                