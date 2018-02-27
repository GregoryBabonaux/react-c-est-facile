import * as types from './actionTypes'

export const login = (login, password) => {
    return {
        type: types.LOGIN, 
        login, 
        password
    }   
    
}

export const loggedIn = () => {
    return {
        type: types.LOGGED_IN
    }
}