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

export const tryAgain = () => {
  const { addToast } = useToasts();
  return (
    addToast('content', {
      appearance: 'success',
      autoDismiss: true,
    })
  );
};

/**
 * This function allows to transform image in Base64
 * @param {*} file
 * @param {*} onLoadCallback
 */
export const getBase64 = (file, onLoadCallback) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

/**
 * This function allows to transform image in Base64 and put in a array for send it to the state
 * @param {*} evt
 * @param {*} fctState function for change the state
 */
export const handlePicture = (evt, fctState) => {
  if (evt.length > 0) {
    const arrayForPicture = [];
    evt.map((elt) => {
      const promise = getBase64(elt);
      promise.then((result) => {
        const elementWanted = result;

        const base64Split = elementWanted.split(',');
        const base64Final = base64Split[1];

        const { name } = elt;
        const currentImg = {
          url: name,
          data: base64Final,
        };
        arrayForPicture.push(currentImg);
      });
    });
    fctState(arrayForPicture, 'picture', 'key');
  }
};

/**
 *
 * @param {*} addToast hook for show notification success or error
 * @param {*} history hook to comeback to a other page
 * @param {*} response response of API, give us the error message or success message
 * this function is for show a little notification for success or error actions
 */
export const toastNotification = (addToast, history, response) => {
  if (response === 'Error') {
    addToast('Il y a eu une erreur dans l\'envoi de l\'étape. Veuillez réessayer plus tard', {
      appearance: 'error',
      autoDismiss: true,
    });
  }
  else if (response === 'Success') {
    addToast('Votre étape à bien été enregistrée !', {
      appearance: 'success',
      autoDismiss: true,
    });
    history.push('/');
  }
};
