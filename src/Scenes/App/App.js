import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import * as stuffActions from '../../Services/Stuff/actions'
import {Header} from 'semantic-ui-react'

import './App.css';

class App extends Component {
  componentDidMount(){ 
    this.props.actions.doSomething('lol')
    this.props.actions.doSomethingAsync({foo: 'bar'})
  }

  render() {
    return (
      <div>
        <Header as='h1'>Titre de la page APP</Header>
        C'est le contenu
      </div>
    );
  }
}

App.propTypes = {
 actions: PropTypes.shape({
   doSomething: PropTypes.func.isRequired,
   doSomethingAsync: PropTypes.func.isRequired
 })
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(stuffActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);