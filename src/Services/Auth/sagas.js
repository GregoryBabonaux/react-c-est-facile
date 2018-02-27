import { call, put, takeEvery } from 'redux-saga/effects'
import {loggedIn} from './actions'

const someAPICalls = {
  tryLogin(payload){
    return new Promise( (resolve, reject) => {
      setTimeout(resolve, 3000, 'faketokenforfun')
    })
  },
  setToken(token){
    return localStorage.setItem('token', token)
  }
}

function* authenticate(action){
  const token = yield call(someAPICalls.tryLogin, action.payload)
  yield call(someAPICalls.setToken, token)
  yield put(loggedIn())
}

function* watchAuth(){
  yield takeEvery('LOGIN', authenticate)
}

export default watchAuth;
