import { connect } from 'react-redux';
import TravelPage from 'src/components/Travel/travelPage';
import { fetchDataForSingleTravel, saveDataForSingleStep } from 'src/actions/travel';

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
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataForSingleTravel: (id) => {
    console.log('je passe dans fetchDataForSingleTravel');
    dispatch(fetchDataForSingleTravel(id));
  },
  saveDataForSingleStep: (value, images, like, id, description, comment) => {
    console.log('je passe dans saveDataForSingleStep');
    dispatch(saveDataForSingleStep(value, images, like, id, description, comment));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(TravelPage);
