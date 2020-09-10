import React from 'react';
import './styles.scss';
import Menu from '../Menu';
import FormLogin from '../../containers/login';

const Login = () => (
  <div className="login">
    <Menu />
    <FormLogin />
  </div>

);

export default Login;
