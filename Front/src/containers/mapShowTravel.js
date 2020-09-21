import { connect } from 'react-redux';

import Map from 'src/components/Travel/map';

const mapStateToProps = (state) => ({
  step: state.travel.step,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
