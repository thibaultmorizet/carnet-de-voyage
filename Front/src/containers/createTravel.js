import { connect } from 'react-redux';
import { changeFieldCreateTravel, saveDateCreateTravel } from 'src/actions/createTravel';
import FormTravel from 'src/components/CreateTravel/formTravel';

const mapStateToProps = (state) => ({
  title: state.createTravel.title,
  description: state.createTravel.description,
  creation_date: state.createTravel.creation_date,
  picture_url: state.createTravel.picture,
  response: state.createTravel.response,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldCreateTravel: (value, name) => {
    dispatch(changeFieldCreateTravel(value, name));
  },
  saveDateCreateTravel: () => {
    dispatch(saveDateCreateTravel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTravel);
