import * as types from './actionTypes'
import initialState from '../../Store/initialState'

let Auth = (state = initialState.get('auth'), action) => {

  switch (action.type){
    case types.LOGIN:
      return  state
                .set('loading', true)
                .set('logged', false);

    case types.LOGGED_IN:
      return state
                .set('loading', false)
                .set('logged', true);
    
    default:
        return state;
  }
}

export default Auth;