import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import {Provider} from 'react-redux'
import { createMockStore } from 'redux-test-utils';
import App from './App';
import initialState from '../../Store/initialState'

const store = createMockStore(initialState)

it('renders without crashing', () => {
  const wrapper = mount(<App store={store}/>)
});

it('renders a header', () => {
  const wrapper = shallow(<App store={store} />).dive()
  expect(wrapper.find('Header')).to.have.length(0)
})

