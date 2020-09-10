/* eslint-disable no-multi-assign */
/* eslint-disable import/prefer-default-export */

/**
 * function for add error message
 */
export const errorMessage = (message) => {
  const buttonSubmit = document.querySelector('.register__form--submit');
  const errorMessageElt = document.querySelector('.errorMessage');
  if (errorMessageElt === null) {
    const createDiv = document.createElement('div');
    createDiv.className = 'errorMessage';
    createDiv.textContent = message;
    buttonSubmit.prepend(createDiv);
  }
  else {
    errorMessageElt.innerHTML = message;
  }
};

export const fileChangedHandler = (evt) => {
  console.log(evt.target.files[0]);
};
