import Auth from './reducer'
import * as types from './actionTypes'
import Immutable from 'immutable'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    // On passe undefined pour le state car on a une valeur par défaut dans notre reducer
    expect(Auth(undefined, {})).toEqual(Immutable.Map({"loading": false, "logged": false}))
  });

  it('should handle login action', () => {
    expect(Auth(undefined, {
        type: types.LOGIN,
    })).toEqual(Immutable.Map({loading: true, logged: false}))
  });

  it('should handle logged in action', () => {
    expect(Auth(undefined, {
      type: types.LOGGED_IN,
    })).toEqual(Immutable.Map({loading: false, logged: true}))

  })
})