import { connect } from 'react-redux';
import RegisterForm from '../components/Register/form';
import { changeValue } from '../actions/register';

const mapStateToProps = (state) => ({
  last_name: state.register.last_name,
  first_name: state.register.first_name,
  email: state.register.email,
  password: state.register.password,
  verifyPassword: state.register.verifyPassword,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister: () => {
  },
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
