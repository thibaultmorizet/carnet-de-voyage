import React from 'react';

// Import Components
import FormRegister from 'src/containers/register';
import Menu from '../Menu';

// Import Styles
import './styles.scss';

const Register = () => (
  <div className="register">
    <Menu />
    <FormRegister />
  </div>
);

export default Register;
