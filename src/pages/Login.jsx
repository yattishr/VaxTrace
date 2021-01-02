import React, { Component } from 'react';
import { Lead, BSpan } from 'bootstrap-4-react';
import { Authenticator, SignIn } from 'aws-amplify-react';

import { JSignIn } from '../components/auth';

const CustomAuthenticator = props => (
  <Authenticator hide={[SignIn]}>
    <JSignIn />
  </Authenticator>
)

export default class Login extends Component {
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        { !user && <CustomAuthenticator /> }
        { user && <Lead>You are signed in as <BSpan font="italic">{user.username}</BSpan>.</Lead> }
      </React.Fragment>
    )
  }
}

