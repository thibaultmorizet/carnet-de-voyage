import { connect } from 'react-redux';
import CarnetDeVoyage from '../components/CarnetDeVoyage';

const mapStateToProps = (state) => ({
  loggedIn: state.keepToken.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CarnetDeVoyage);
