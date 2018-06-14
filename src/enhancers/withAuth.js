import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default WrappedComponent => {
  const WithAuthentication = props =>
    !props.isAuthenticated ? (
      <Redirect to="/login" />
    ) : (
      <WrappedComponent {...props} />
    );

  WithAuthentication.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  const mapStateToProps = ({ app }) => ({
    isAuthenticated: app.auth.isAuthenticated
  });

  return connect(mapStateToProps)(WithAuthentication);
};
