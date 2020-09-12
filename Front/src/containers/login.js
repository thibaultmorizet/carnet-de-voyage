import { connect } from 'react-redux';
import LoginForm from '../components/Login/form';
import { changeValue } from '../actions/login';

/*const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
});*/

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => {
  },
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
});

export default connect(/*mapStateToProps,*/ mapDispatchToProps)(LoginForm);