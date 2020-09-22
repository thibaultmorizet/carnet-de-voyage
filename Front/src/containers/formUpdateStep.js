import { connect } from 'react-redux';
import FormUpdateStep from '../components/UpdateStep/formUpdateStep';
import {
  fetchDataStep, changeDataStep, deletePictureUpdate, savePictureUpdate, sendDateUpdate, deleteStep,
} from '../actions/updateStep';

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
  pictures_new: state.updateStep.pictures_new,
  unthorizedResponse: state.updateStep.unthorizedResponse,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStep: () => {
    dispatch(fetchDataStep());
  },
  changeDataStep: (value, name) => {
    dispatch(changeDataStep(value, name));
  },
  deletePictureUpdate: (value) => {
    dispatch(deletePictureUpdate(value));
  },
  savePictureUpdate: (value, name) => {
    dispatch(savePictureUpdate(value, name));
  },
  sendDateUpdate: () => {
    dispatch(sendDateUpdate());
  },
  deleteStep: () => {
    dispatch(deleteStep());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdateStep);
