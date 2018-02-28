import { call, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import {loggedIn} from './actions'

const someAPICalls = {
  tryLogin(payload){
    return new Promise( (resolve, reject) => {
      setTimeout(resolve, 200, 'faketokenforfun')
    })
  },
}

export function* authenticate(action){
  const token = yield call(someAPICalls.tryLogin, action.payload)
  yield put(loggedIn())
}

it('must put a loggedIn action', () => {
  const action = {
    type: 'LOGIN',
    payload: {
      login : '', 
      password: '',
    }
  }

  return expectSaga(authenticate, action)
    .put(loggedIn())
    .run();
})