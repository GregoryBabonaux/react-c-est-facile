import Immutable from 'immutable'
import * as types from './actionTypes'
import initialState from '../../Store/initialState'

let stuff = (state = initialState.stuff, action) => {
  state = Immutable.fromJS(state)

  switch(action.type){
    case types.DO_SOMETHING:
      let newState = [...state]
      newState.push(action.something)
      // return newState
      return state
            .toJS()

    default:
      // return state;
      return state
            .toJS()

  }
}
export default stuff;