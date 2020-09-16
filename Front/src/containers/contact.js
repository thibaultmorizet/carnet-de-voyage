import { connect } from 'react-redux';
import FormContact from '../components/Contact/formContact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  objet: state.contact.objet,
  message: state.contact.message,
  checked: state.contact.checked,
  response: state.contact.response,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormContact);
