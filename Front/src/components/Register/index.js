import React from 'react';
import Menu from '../Menu';
import FormRegister from '../../containers/register';

// Import Styles
import './styles.scss';

const Register = () => (
  <div className="register">
    <Menu />
    <FormRegister />
  </div>
);

export default Register;
