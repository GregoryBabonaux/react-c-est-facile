import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {Provider} from 'react-redux'
import { createMockStore } from 'redux-test-utils';
import Login from './Login';
import initialState from '../../Store/initialState'
const store = createMockStore(initialState)

describe('<Login /> container', () => {
  
  it('renders without crashing', () => {
    const wrapper = mount(<Login store={store}/>)
  });

  it('should not dispatch a login action when form in not submited', () => {
    const action = {
      type: 'LOGIN',
      login :'', 
      password: ''
    }
    const wrapper = mount(<Login store={store} />)
    expect(store.isActionDispatched(action)).to.be.false;
  })

  it('should dispatch a login action when form in submited', () => {
    const action = {
      type: 'LOGIN',
      login :'', 
      password: ''
    }
    const wrapper = mount(<Login store={store} />)
    const button = wrapper.find('Button')
    button.simulate('submit')
    expect(store.isActionDispatched(action)).to.be.true;
  })

  it('should render a spinner if loading is true', () => {
    let newState = {...initialState, auth : {...initialState.auth, loading: true} }
    const newStore = createMockStore(newState)
    const wrapper = mount(<Login store={newStore} />)
    
    expect(wrapper.find('Form')).to.have.length(0)
    expect(wrapper.find('Loader')).to.have.length(1)
  })

})

