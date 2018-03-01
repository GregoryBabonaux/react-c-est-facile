import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './Scenes/App/App';
import Login from './Scenes/Login/Login';

import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
import AuthenticationRoutes from './Components/AuthenticationRoutes/AuthenticationRoutes'


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoutes exact path='/' component={App}/>
        <AuthenticationRoutes exact path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}