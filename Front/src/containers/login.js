import { connect } from 'react-redux';
import LoginForm from '../components/Login/form';
import { changeValue, saveLogin } from '../actions/login';
import { changeValueCheck, saveLoginCheck } from '../actions/loginCheck';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  token: state.keepToken.token,
  loggedIn: state.keepToken.loggedIn,
  response: state.login.response,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => {
    const actionCheck = saveLoginCheck();
    dispatch(actionCheck);
  },
  changeField: (value, name) => {
    const actionCheck = changeValueCheck(value, name);
    dispatch(actionCheck);
    const action = changeValue(value, name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
