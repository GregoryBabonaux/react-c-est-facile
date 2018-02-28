import Auth from './reducer'
import * as types from './actionTypes'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    // On passe undefined pour le state car on a une valeur par défaut dans notre reducer
    expect(Auth(undefined, {})).toEqual({"loading": false, "logged": false})
  });

  it('should handle login action', () => {
    expect(Auth([], {
        type: types.LOGIN,
    })).toEqual({loading: true, logged: false})
  });

  it('should handle logged in action', () => {
    expect(Auth([], {
      type: types.LOGGED_IN,
    })).toEqual({loading: false, logged: true})

  })
})