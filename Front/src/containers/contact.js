import { connect } from 'react-redux';
import { changeValueContact, changeCheckboxContact, sendEmailContact } from 'src/actions/contact';
import FormContact from '../components/Contact/formContact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  objet: state.contact.objet,
  message: state.contact.message,
  checked: state.contact.checked,
  response: state.contact.response,
});

const mapDispatchToProps = (dispatch) => ({
  changeValueContact: (value, name) => {
    dispatch(changeValueContact(value, name));
  },
  changeCheckboxContact: () => {
    dispatch(changeCheckboxContact());
  },
  sendEmailContact: () => {
    dispatch(sendEmailContact());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContact);
