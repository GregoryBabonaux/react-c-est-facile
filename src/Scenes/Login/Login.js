import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as authActions from '../../Services/Auth/actions'
import { RingLoader } from 'react-spinners';
import { Form, Header } from 'semantic-ui-react'
import Formsy from 'formsy-react';
import MyInput from '../../Components/MyInput/MyInput'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';

import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary'

export class Login extends Component {
    constructor(props){
      super(props)
      this.state = {
        login: '',
        password: '',
        canSubmit: false,
      }
    }

    _handleSubmit = (model) => {
      this.props.actions.login(model.email, model.password)
    }

    disableButton = () => {
      this.setState({ canSubmit: false });
    }

    enableButton = () => {
      this.setState({ canSubmit: true });
    }

    _renderForm = () => {
      return (
        <div>
          <Formsy onValidSubmit={this._handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <Header>Connexion</Header>

            <Form.Group widths='equal'>
              <ErrorBoundary>
                <MyInput
                  name="email"
                  validations="isEmail"
                  label="Adresse E-Mail"
                  placeholder="E-Mail"
                  validationError="Adresse E-Mail non valide"
                  required
                  error={false}
                />
              </ErrorBoundary>

              <ErrorBoundary>
                <MyInput
                  name="password"
                  label="Mot de passe"
                  placeholder="Mot de passe"
                  validationError="Field empty"
                  required
                  type="password"
                  error={false}
                />
              </ErrorBoundary>
            </Form.Group>
            <Form.Button disabled={!this.state.canSubmit}>Submit</Form.Button>
          
          </Formsy>
        </div>
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

Login.propTypes = {
  auth: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
  }),
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired, 
    loggedIn: PropTypes.func.isRequired
  })
}

const mapStateToProps = ({auth}) => ({
  auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);