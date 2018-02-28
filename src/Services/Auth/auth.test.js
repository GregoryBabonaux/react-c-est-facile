import * as actions from './actions'
import * as types from './actionTypes'
 
describe('auth actions', () => {

  it('should dispatch a login action with expectedAction', () => {
    const login = 'Bob'
    const password = 'toto123'

    const expectedAction = {
      type: types.LOGIN, 
        login, 
        password
    }
    expect(actions.login(login, password)).toEqual(expectedAction)
  })

  it('should dispatch a loggedIn action with expectedAction', () => {
    const expectedAction = {
      type: types.LOGGED_IN
    }
    expect(actions.loggedIn()).toEqual(expectedAction)
  })
})