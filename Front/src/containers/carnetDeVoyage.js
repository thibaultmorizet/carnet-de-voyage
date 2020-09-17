import { connect } from 'react-redux';
import CarnetDeVoyage from 'src/components/CarnetDeVoyage';

const mapStateToProps = (state) => ({
  loading: state.updateStep.loading,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CarnetDeVoyage);
