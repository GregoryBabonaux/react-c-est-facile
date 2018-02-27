import { call, put, takeEvery } from 'redux-saga/effects'
import {doSomething} from './actions'

const someAPICalls = {
  fetchDataFromWebservices(payload){
    return new Promise( (resolve, reject) => {
      setTimeout(resolve, 3000, 'Manger des briques')
    })
  }
}

function* fetchSomething(action){
  const payload = yield call(someAPICalls.fetchDataFromWebservices, action.payload)
  yield put(doSomething(payload))
}

function* watchStuff(){
  yield takeEvery('DO_SOMETHING_ASYNC', fetchSomething)
}

export default watchStuff;
