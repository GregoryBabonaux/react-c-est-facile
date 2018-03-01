import React  from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Layout from '../Layout/Layout'

const ProtectedRoutes = ({component: Component, ...rest}) => {
  const {path} = rest;
  const {logged} = rest.auth

  if( logged ){
    return <Redirect to="/" />
  }

  return (
    <Layout exact path={path} component={Component} />
  )
}


const mapStateToProps = ({auth}) => ({
  auth
})

export default connect(mapStateToProps)(ProtectedRoutes);
