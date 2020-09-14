/* eslint-disable no-multi-assign */
/* eslint-disable import/prefer-default-export */
import { useToasts } from 'react-toast-notifications';
/**
 * function for add error message
 */
export const errorMessage = (message, submitElement) => {
  const buttonSubmit = document.querySelector(submitElement);
  const errorMessageElt = document.querySelector('.errorMessage');
  if (errorMessageElt === null) {
    console.log('lala');
    const createDiv = document.createElement('div');
    createDiv.className = 'errorMessage';
    createDiv.textContent = message;
    buttonSubmit.prepend(createDiv);
  }
  else {
    errorMessageElt.innerHTML = message;
  }
};

// export const fileChangedHandler = (evt) => {
//   console.log(evt.target.files[0]);
// };

export const handleDate = (date) => {
  const splitDate = date.split('/');
  if (splitDate[0] > 31 || splitDate[0] <= 0 || splitDate[1] > 12 || splitDate[1] <= 0 || splitDate[2] > 3000 || splitDate[2] <= 1950) {
    return false;
  }
  return true;
};

export const emptyElement = (elt) => {
  const isEmptyElement = elt.includes('');
  if (isEmptyElement === true) {
    return true;
  }
  return false;
};
