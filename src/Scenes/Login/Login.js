import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as authActions from '../../Services/Auth/actions'
import { RingLoader } from 'react-spinners';
import { Form, Header } from 'semantic-ui-react'

import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
      super(props)
      this.state = {
        login: '',
        password: '',
      }
    }

    _handleChange = (e, input) => {
      this.setState({ 
        [input] : e.target.value 
      })
    }

    _handleSubmit = (e) => {
      e.preventDefault();
      this.props.actions.login(this.state.login, this.state.password)
    }


    _renderForm = () => {
      return (
        <Form onSubmit={(e) => this._handleSubmit(e)}>
          <Header>Connexion</Header>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Login' onChange={(e) => this._handleChange(e, 'login')} placeholder='Login' />
            <Form.Input fluid label='Password' onChange={(e) => this._handleChange(e, 'password')} placeholder='Password' />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      )
    }

    _renderSpinner = () => {
      return (
        <RingLoader
          color={'#123abc'} 
          loading={this.state.loading} 
        />
      )
    }

    render(){
      let {loading, logged} = this.props.auth;

      if( logged ) {
        return <Redirect to="/" />
      }

      return (
        <div>
          {
            loading === true ? this._renderSpinner() : this._renderForm()
          }
        </div>
      )
    }
}

const mapStateToProps = ({auth}) => ({
  auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);