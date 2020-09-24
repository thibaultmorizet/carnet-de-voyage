import { connect } from 'react-redux';
import TravelPage from 'src/components/Travel/travelPage';
import {
  fetchDataForSingleTravel, saveDataForSingleStep, fetchDataForUrlShare,
} from 'src/actions/travel';

const mapStateToProps = (state) => ({
  travel: {
    id: state.travel.travel.id,
    title: state.travel.travel.title,
    description: state.travel.travel.description,
    status: state.travel.travel.status,
    picture_url: state.travel.travel.picture_url,
    creation_date: state.travel.travel.creation_date,
  },
  step: state.travel.step,
  loading: state.travel.loading,
  description: state.travel.description,
  title: state.travel.title,
  like: state.travel.like,
  currentId: state.travel.currentId,
  currentPicture: state.travel.currentPicture,
  urlShare: state.travel.urlShare,
  response: state.travel.response,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataForSingleTravel: (id, type) => {
    dispatch(fetchDataForSingleTravel(id, type));
  },
  saveDataForSingleStep: (value, images, like, id, description, comment) => {
    dispatch(saveDataForSingleStep(value, images, like, id, description, comment));
  },
  fetchDataForUrlShare: (id) => {
    dispatch(fetchDataForUrlShare(id));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(TravelPage);
