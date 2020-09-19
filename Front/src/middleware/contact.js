import axios from 'axios';
import { sendEmailContact } from '../actions/contact';

const Contact = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL_CONTACT: {
      const state = store.getState();

      axios.post('http:34.239.44.174/contact', {
        email: state.formContact.email,
        object: state.formContact.objet,
        text: state.formContact.message,
      })
        .then((response) => {
          const actionToDispatch = sendEmailContact();
          store.dispatch(actionToDispatch);
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default Contact;
