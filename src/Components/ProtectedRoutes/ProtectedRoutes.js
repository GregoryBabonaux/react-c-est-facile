import React  from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as stuffActions from '../../Services/Stuff/actions'
import {Redirect} from 'react-router-dom'

import Layout from '../Layout/Layout'

const ProtectedRoutes = ({component: Component, ...rest}) => {
  const {path} = rest;
  const {logged} = rest.auth

  if( !logged ){
    return <Redirect to="/login" />
  }

  return (
    <Layout exact path={path} component={Component} />
  )
}


const mapStateToProps = ({auth}) => ({
  auth
})

export default connect(mapStateToProps)(ProtectedRoutes);
