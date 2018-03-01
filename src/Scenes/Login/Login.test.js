import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
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


  it('should not dispatch action if form is empty', () => {
    const action = {
      type: 'LOGIN',
      login :'test@test.com', 
      password: 'test@test.com'
    }

    const wrapper = mount(<Login store={store} />)
    const button = wrapper.find('FormButton')
    button.simulate('submit')
    expect(store.isActionDispatched(action)).to.be.false;
  })

  it('should not dispatch a login action when form in submited with bad values', () => {
    const action = {
      type: 'LOGIN',
      login :'badvalue', 
      password: 'toto123secure'
    }
    const wrapper = mount(<Login store={store} />)

    const login = wrapper.find('MyInput[name="email"]');
    const password = wrapper.find('MyInput[name="password"]');

    login.instance().props.setValue(action.login)
    password.instance().props.setValue(action.password)
    
    const button = wrapper.find('FormButton')
    button.simulate('submit')
    expect(store.isActionDispatched(action)).to.be.false;
  })

  it('should dispatch a login action when form in submited', () => {
    const action = {
      type: 'LOGIN',
      login :'test@test.com', 
      password: 'test@test.com'
    }
    const wrapper = mount(<Login store={store} />)

    const login = wrapper.find('MyInput[name="email"]');
    const password = wrapper.find('MyInput[name="password"]');

    login.instance().props.setValue(action.login)
    password.instance().props.setValue(action.password)
    
    const button = wrapper.find('FormButton')
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

