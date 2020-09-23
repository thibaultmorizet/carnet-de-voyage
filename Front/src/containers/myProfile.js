import { connect } from 'react-redux';

import formProfile from 'src/components/MyProfile/formProfile';
import { fetchDataForUser, changeFieldForDataUser, sendDataForUpdateUser } from '../actions/myProfile';

const mapStateToProps = (state) => ({
  lastname: state.myProfile.lastname,
  firstname: state.myProfile.firstname,
  password: state.myProfile.password,
  verifyPassword: state.myProfile.verifyPassword,
  email: state.myProfile.email,
  response: state.myProfile.response,
  loading: state.myProfile.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataForUser: () => {
    console.log('salut');
    dispatch(fetchDataForUser());
  },
  changeFieldForDataUser: (value, name) => {
    const action = changeFieldForDataUser(value, name);
    dispatch(action);
  },
  sendDataForUpdateUser: () => {
    dispatch(sendDataForUpdateUser());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(formProfile);
