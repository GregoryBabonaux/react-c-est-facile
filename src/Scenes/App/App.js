import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as stuffActions from '../../Services/Stuff/actions'
import {Redirect} from 'react-router-dom'
import {Header} from 'semantic-ui-react'

import './App.css';

class App extends Component {
  componentDidMount(){ 
    this.props.actions.doSomething('lol')
    this.props.actions.doSomethingAsync({foo: 'bar'})
  }

  render() {

    let {logged} = this.props.auth;

    if( !logged ){
      return <Redirect to="/login" />
    }

    return (

      <div>
        <Header as='h1'>Titre de la page APP</Header>
          
        C'est le contenu
      </div>

    );
  }
}

const mapStateToProps = ({stuff, auth}) => ({
  stuff, 
  auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(stuffActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);