import React from 'react';
import {AUTH_TOKEN} from '../constants';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login: true,
      email: '',
      password: '',
      name: '',
    }
  }
  render(){
    return(
        <div>
          <h4 className="mv-3">{this.state.login ? 'Login' : 'Sign Up'}</h4>
          <div className="d-flex flex-column">
            {!this.state.login && (
              <input
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                placeholder="Your name"
              />
            )}
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Your email address"
            />
            <input
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Choose a safe password"
            />
          </div>
          <div className="d-flex mt-3">
            <div className="btn btn-default mr-2 " onClick={() => this._confirm()}>
              {this.state.login ? 'Login' : 'Create account'}
            </div>
            <div
              className="btn btn-default"
              onClick={() => this.setState({ login: !this.state.login })}
            >
              {this.state.login
                ? 'Create an account?'
                : 'Already have an account?'}
            </div>
          </div>
        </div>
      )
    }
  
    _confirm = async () => {
      // ... you'll implement this in a bit
    }
  
    _saveUserData = token => {
      localStorage.setItem(AUTH_TOKEN, token)
    }
  }
  
  export default Login;
