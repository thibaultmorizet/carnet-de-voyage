import { connect } from 'react-redux';

import RegisterForm from 'src/components/Register/form';
import { changeValue, saveRegister } from '../actions/register';

const mapStateToProps = (state) => ({
  last_name: state.register.last_name,
  first_name: state.register.first_name,
  email: state.register.email,
  password: state.register.password,
  verifyPassword: state.register.verifyPassword,
  response: state.register.response,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister: () => {
    const action = saveRegister();
    dispatch(action);
  },
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
