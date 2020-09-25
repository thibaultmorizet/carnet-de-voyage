import React from 'react';
import Menu from '../Menu';
import FormLogin from '../../containers/login';

import './styles.scss';

const Login = () => (
  <div className="login">
    <Menu />
    <FormLogin />
  </div>
);

export default Login;
