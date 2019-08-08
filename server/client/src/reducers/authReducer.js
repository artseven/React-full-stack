export default function(state = {}, action) {
    console.log('Our action is: ', action);
    switch (action.type) {
        default:
            return state;
    }
}