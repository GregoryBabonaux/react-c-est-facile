import * as types from './actionTypes'
import initialState from '../../Store/initialState'

let stuff = (state = initialState.get('stuff'), action) => {

  switch(action.type){
    case types.DO_SOMETHING:
      return state.set(state.size, action.something)

    default:
      return state

  }
}
export default stuff;