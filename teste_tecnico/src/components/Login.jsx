import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import '../css/Login.css';

class Login extends React.Component {
  render() {
    const { fetchUser, handleInput } = this.props;
    return (
      <section className="login-container">
        <GoMarkGithub className="github-icon" />
        <input
          type="text"
          className="username-input"
          name="userInput"
          placeholder="Usuario"
          onChange={ handleInput }
          required
        />
        <button onClick={ fetchUser } className="login-button">ENTRAR { <BsArrowRightShort className="login-icon" /> }</button>
      </section>
    );
  }
};

export default Login;