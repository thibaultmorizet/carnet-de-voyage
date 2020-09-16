import { connect } from 'react-redux';
import FormUpdateStep from '../components/UpdateStep/formUpdateStep';
import { fetchDataStep, changeDataStep, deletePictureUpdate } from '../actions/updateStep';

const mapStateToProps = (state) => ({
  title: state.updateStep.title,
  description: state.updateStep.description,
  latitude: state.updateStep.latitude,
  longitude: state.updateStep.longitude,
  step_date: state.updateStep.step_date,
  picture: state.updateStep.picture,
  travel_id: state.updateStep.travel_id,
  response: state.updateStep.response,
  type: state.updateStep.type,
  loading: state.updateStep.loading,
  picture_delete: state.updateStep.picture_delete,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStep: () => {
    console.log('je passe dans fetchDataStep');
    dispatch(fetchDataStep());
  },
  changeDataStep: (value, name) => {
    console.log('je passe dans changeDataStep');
    dispatch(changeDataStep(value, name));
  },
  deletePictureUpdate: (value) => {
    console.log('valeur', value);
    dispatch(deletePictureUpdate(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdateStep);
