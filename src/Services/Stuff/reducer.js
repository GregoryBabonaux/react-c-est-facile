import * as types from './actionTypes'
import initialState from '../../Store/initialState'

let stuff = (state = initialState.stuff, action) => {
  switch(action.type){
    case types.DO_SOMETHING:
      let newState = [...state]
      newState.push(action.something)
      return newState
    
    default:
        return state;
  }
}
export default stuff; 