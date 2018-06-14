import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { login } from 'actions/auth';

class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    hasErrors: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: ''
    };
  }

  submit = (username, password) => {
    console.log(login(username, password));
  };

  render() {
    const { isAuthenticated, isLoading, hasErrors } = this.props;
    console.log(this.state);
    return (
      <div className="login">
        {isAuthenticated && <h2>Bienvenue</h2>}

        {!isLoading && hasErrors && <span>"Username and password does not match."</span>}

        {!isAuthenticated && (
          <div>
            <input type="text" onChange={e => this.setState({ email: e.target.value })} />
            <input type="password" onChange={e => this.setState({ pwd: e.target.value })} />
            <button onClick={() => this.submit(this.state.email, this.state.pwd)}>send</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isAuthenticated: app.auth.isAuthenticated,
  isLoading: app.auth.isLoading,
  hasErrors: app.auth.hasErrors
});

export default connect(mapStateToProps)(LoginForm);
