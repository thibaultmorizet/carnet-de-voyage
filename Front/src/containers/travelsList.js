import { connect } from 'react-redux';
import { changeFieldTravelsList, saveDateTravelsList } from 'src/actions/travelsList';
import Containers from 'src/components/TravelsList/travels';

const mapStateToProps = (state) => ({
  title: state.travelsList.title,
  description: state.travelsList.description,
  picture_url: state.travelsList.picture,
  response: state.travelsList.response,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldTravelsList: (value, name) => {
    dispatch(changeFieldTravelsList(value, name));
  },
  saveDateTravelsList: () => {
    console.log('saveDateTravelsList');
    dispatch(saveDateTravelsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
