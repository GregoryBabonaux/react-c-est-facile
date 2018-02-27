import * as types from './actionTypes'
import initialState from '../../Store/initialState'

let Auth = (state = initialState.auth, action) => {
    switch (action.type){
        case types.LOGIN:
            return {...state, loading: true, logged: false};
        
        case types.LOGGED_IN:

            return {...state, logged: true, loading: false};
        
        default:
            return state;
    }
}

export default Auth;