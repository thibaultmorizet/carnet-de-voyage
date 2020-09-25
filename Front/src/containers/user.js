import { connect } from 'react-redux';
import User from '../components/user';
import { fetchUser } from '../actions/user';

const mapStateToProps = (state) => ({
  last_name: state.user.last_name,
  first_name: state.user.first_name,
  email: state.user.email,
  password: state.user.password,
  role: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
