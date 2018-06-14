import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from 'actions/auth';
import styles from './styles.scss';

class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    errorInfo: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: ''
    };
  }

  render() {
    const { isAuthenticated, isLoading, hasErrors, errorInfo } = this.props;
    return (
      <div className={styles.login}>
        {isAuthenticated && <Redirect to="/" />}

        {isLoading && <div className={styles.success}>loading</div>}

        {!isLoading &&
          hasErrors && <div className={styles.danger}>{errorInfo}</div>}

        {!isAuthenticated && (
          <div>
            <input
              type="text"
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="email"
            />
            <input
              type="password"
              placeholder="pass"
              onChange={e => this.setState({ pwd: e.target.value })}
            />
            <button
              onClick={() =>
                this.props.submit(this.state.email, this.state.pwd)
              }
            >
              send
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isAuthenticated: app.auth.isAuthenticated,
  isLoading: app.auth.isLoading,
  hasErrors: app.auth.hasErrors,
  errorInfo: app.auth.errorInfo
});

const mapDispatchToProps = dispatch => ({
  submit: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
