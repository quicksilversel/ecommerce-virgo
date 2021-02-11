import {React, Component} from 'react';
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class Login extends Component {
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
    
  render(){
    return(
      <Container>
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <h1>Sign In</h1>
          <label htmlFor="username">Username</label>
          <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
          />
          <br></br>
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
      )
  }
}

Login.propTypes = {
    handle_login: PropTypes.func.isRequired
  };