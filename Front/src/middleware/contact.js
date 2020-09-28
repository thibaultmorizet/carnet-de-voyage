import axios from 'axios';
import { SEND_EMAIL_CONTACT } from '../actions/contact';

const Contact = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL_CONTACT: {
      const state = store.getState();

      axios.post('http://34.239.44.174/contact', {
        email: state.contact.email,
        object: state.contact.objet,
        text: state.contact.message,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default Contact;
