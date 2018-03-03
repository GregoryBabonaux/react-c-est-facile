import Immutable from 'immutable'
import * as types from './actionTypes'
import initialState from '../../Store/initialState'

let Auth = (state = initialState.auth, action) => {
  state = Immutable.fromJS(state)

  switch (action.type){
    case types.LOGIN:
      return  state
                .set('loading', true)
                .set('logged', false)
                .toJS()

    case types.LOGGED_IN:
      return state
                .set('loading', false)
                .set('logged', true)
                .toJS()
    
    default:
        return state.toJS();
  }
}

export default Auth;