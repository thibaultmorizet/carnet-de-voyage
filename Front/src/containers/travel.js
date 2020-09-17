import { connect } from 'react-redux';
import TravelPage from 'src/components/Travel/travelPage';
import { fetchDataForSingleTravel } from 'src/actions/travel';

const mapStateToProps = (state) => ({
  travel: {
    id: state.travel.travel.id,
    title: state.travel.travel.title,
    description: state.travel.travel.description,
    status: state.travel.travel.status,
    picture_url: state.travel.travel.picture_url,
    creation_date: state.travel.travel.creation_date,
  },
  step: state.steps,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataForSingleTravel: () => {
    console.log('je passe dans fetchDataForSingleTravel');
    dispatch(fetchDataForSingleTravel());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(TravelPage);
