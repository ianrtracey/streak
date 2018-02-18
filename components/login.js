import * as React from 'react';
import { bindActionCreators } from 'redux';
import { signInWithGoogle, getAuthResult, firebaseAuth } from '../lib/auth';
import withRedux from 'next-redux-wrapper';
import { initStore, userReceived } from '../store';

const firebaseAuthKey = 'FIREBASE_AUTH_IN_PROGRESS';

class Login extends React.Component {
  static getInitialProps({ store }) {
    firebaseAuth.onAuthStateChanged(user => {
      this.props.userReceived(user);
    });
  }

  componentWillMount() {
    firebaseAuth.onAuthStateChanged(user => {
      this.props.userReceived(user);
    });
  }

  handleLogin() {
    signInWithGoogle()
      .catch(error => {
        alert(error);
        localStorage.remove(firebaseAuthKey);
      })
      .then(result => {
        console.log(result);
      });
  }

  render() {
    return <div onClick={this.handleLogin}>Login</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  userReceived: bindActionCreators(userReceived, dispatch),
});

export default withRedux(initStore, null, mapDispatchToProps)(Login);
