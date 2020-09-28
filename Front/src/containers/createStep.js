import { connect } from 'react-redux';
import CreateStep from 'src/components/CreateStep/formStep';
import { changeValue, saveStep, changeValuePicture } from 'src/actions/createStep';

const mapStateToProps = (state) => ({
  title: state.createStep.title,
  description: state.createStep.description,
  picture: state.createStep.picture,
  latitude: state.createStep.latitude,
  longitude: state.createStep.longitude,
  step_date: state.createStep.step_date,
  response: state.createStep.response,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  handleSubmit: () => {
    dispatch(saveStep());
  },
  changePicture: (value, name) => {
    dispatch(changeValuePicture(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep);
