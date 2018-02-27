import * as types from './actionTypes'

export const doSomething  = (something) =>({
    type: types.DO_SOMETHING, 
    something
})

export const doSomethingAsync = (payload) => ({
    type: types.DO_SOMETHING_ASYNC, 
    payload
})
