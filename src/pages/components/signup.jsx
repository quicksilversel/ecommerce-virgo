import {React, Component } from 'react';
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types';

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
        <Container>
            <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                <h1>Sign Up</h1>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handle_change}
                />
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handle_change}
                />
                <input type="submit" />
            </form>
        </Container>
      
    );
  }
}

export default SignUp;

SignUp.propTypes = {
  handle_signup: PropTypes.func.isRequired
};