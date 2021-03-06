import React  from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
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

ProtectedRoutes.propTypes = {
  component: PropTypes.func.isRequired, 
  path: PropTypes.string.isRequired,
  auth: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
  })
}


const mapStateToProps = (state) => ({
  auth : state.toJS().auth
})

export default connect(mapStateToProps)(ProtectedRoutes);
