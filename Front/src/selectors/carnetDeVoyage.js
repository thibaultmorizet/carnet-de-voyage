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
    const createDiv = document.createElement('div');
    createDiv.className = 'errorMessage';
    createDiv.textContent = message;
    buttonSubmit.prepend(createDiv);
  }
  else {
    errorMessageElt.innerHTML = message;
  }
};

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
export const toastNotification = (addToast, history, response, message, destination) => {
  if (response === 'Error') {
    addToast('Une erreur s\'est produite. Veuillez réessayer plus tard', {
      appearance: 'error',
      autoDismiss: true,
    });
  }
  else if (response === 'Success') {
    addToast(message, {
      appearance: 'success',
      autoDismiss: true,
      autoDismissTimeout: '3000',
    });
    history.push(destination);
    // location.reload();
  }
};

export const changeDateFormat = (dateWanted) => {
  const newDate = new Date(dateWanted);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const middleDate = newDate.toLocaleDateString('de-DE', options);
  const step_date = middleDate.replace('.', '/').replace('.', '/');
  return step_date;
};

export const addImage = (pictures, openModal) => {
  if (pictures !== null) {
    const divElement = document.querySelector('.travelPage__content--images');
    const newDivElement = document.createElement('div');
    newDivElement.className = 'stepImages';
    divElement.appendChild(newDivElement);
    pictures.map((elt) => {
      const imgElement = document.createElement('img');
      imgElement.className = 'stepImages__picture';
      imgElement.src = elt.data;
      imgElement.addEventListener('click', openModal);

      newDivElement.appendChild(imgElement);
    });
  }
};
