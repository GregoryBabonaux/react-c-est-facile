import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    stuff: [],
    auth: {
        loading: false,
        logged: false,
    }
})

export default initialState
