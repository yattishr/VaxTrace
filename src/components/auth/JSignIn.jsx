import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';
import { Auth } from 'aws-amplify';

export default class JSignIn extends Component {

  signIn() {
    const { username, password } = this.inputs;
    Auth.signIn(username, password)
      .then(user => this.signInSuccess(user))
      .catch(err => this.signInError(err));
  }


  signInSuccess(user) {
    this.setState({ error: '' });

    const { onStateChange } = this.props;
    if (!onStateChange) { return; }

    if (user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
      onStateChange('confirmSignIn', user);
    } else {
      onStateChange('signedIn', user);
    }
  }  

  render() {
    const { authState } = this.props;
    if (!['signIn', 'signedOut', 'signedUp'].includes(authState)) { return null; }

    return (
      <Button light outline sm border="0" onClick={this.signIn}>Sign In</Button>
    )
  }
}