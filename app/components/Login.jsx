import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLoginGithub() {
    var {dispatch} = this.props;

    dispatch(actions.githubLogin());
  },

  onLoginFacebook() {
    var {dispatch} = this.props;

    dispatch(actions.facebookLogin());
  },

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with a social account below
              </p>
              <p>
                <button className="button" onClick={this.onLoginFacebook}>Login With Facebook</button>
              </p>
              <p>
                <button className="button" onClick={this.onLoginGithub}>Login With GitHub</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
