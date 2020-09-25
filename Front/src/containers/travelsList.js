import {
  connect,
} from 'react-redux';
import TravelsList from '../components/TravelsList/travels';
import {
  fetchDataTravelsList,
} from '../actions/travelsList';
import { deleteTravel } from '../actions/updateTravel';

const mapStateToProps = (state) => ({
  travelsInProgress: state.travelsList.travelsInProgress,
  travelsDone: state.travelsList.travelsDone,
  loading: state.travelsList.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataTravelsList: () => {
    dispatch(fetchDataTravelsList());
  },
  deleteTravel: (id) => {
    dispatch(deleteTravel(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelsList);
