import { connect } from 'react-redux';
import CreateStep from 'src/components/CreateStep/formStep';
import { changeValue, saveStep } from 'src/actions/createStep';

const mapStateToProps = (state) => ({
  title: state.createStep.title,
  description: state.createStep.description,
  latitude: state.createStep.latitude,
  longitude: state.createStep.longitude,
  step_date: state.createStep.step_date,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValue(value, name));
  },
  handleSubmit: () => {
    console.log('je fais un submit');
    dispatch(saveStep());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep);
