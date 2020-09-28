import { connect } from 'react-redux';
import {
  fetchDataForUpdateTravel, changeDateForUpdateTravel, sendDataForUpdateTravel, deleteTravel,
} from 'src/actions/updateTravel';
import FormUpdateTravel from 'src/components/UpdateTravel/formUpdateTravel';

const mapStateToProps = (state) => ({
  title: state.updateTravel.title,
  description: state.updateTravel.description,
  creation_date: state.updateTravel.creation_date,
  picture_url: state.updateTravel.picture,
  status: state.updateTravel.status,
  response: state.updateTravel.response,
  loading: state.updateTravel.loading,
  unthorizedResponse: state.updateTravel.unthorizedResponse,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataForUpdateTravel: () => {
    dispatch(fetchDataForUpdateTravel());
  },
  changeDateForUpdateTravel: (value, name) => {
    dispatch(changeDateForUpdateTravel(value, name));
  },
  sendDataForUpdateTravel: () => {
    dispatch(sendDataForUpdateTravel());
  },
  deleteTravel: (id) => {
    dispatch(deleteTravel(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdateTravel);
