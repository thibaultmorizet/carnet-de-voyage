import {
  connect,
} from 'react-redux';
import TravelsList from '../components/TravelsList/travels';
import {
  fetchDataTravelsList,
} from '../actions/travelsList';

const mapStateToProps = (state) => ({
  travelsInProgress: state.travelsList.travelsInProgress,
  travelsDone: state.travelsList.travelsDone,
  loading: state.travelsList.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataTravelsList: () => {
    dispatch(fetchDataTravelsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelsList);
