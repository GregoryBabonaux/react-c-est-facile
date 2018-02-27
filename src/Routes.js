import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './Scenes/App/App';
import Login from './Scenes/Login/Login';
import Layout from './Components/Layout/Layout'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout exact path='/' component={App}/>
        <Layout exact path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}