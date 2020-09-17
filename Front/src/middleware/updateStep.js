import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_STEP, saveDataStep, SEND_DATA_UPDATE, DELETE_STEP, responseUpdateStep,
} from '../actions/updateStep';

const updateStep = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_STEP: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get(`http://34.239.44.174/api/travel/${state.updateStep.id}/step/${state.updateStep.type}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const travelId = response.data.travel.id;
          const {
            title,
            description,
            latitude,
            longitude,
            pictures,
            stepDate,
            id,
          } = response.data;

          const newDate = new Date(stepDate);
          const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const middleDate = newDate.toLocaleDateString('de-DE', options);
          const step_date = middleDate.replace('.', '/').replace('.', '/');

          const AllPictures = [];
          pictures.map((elt) => {
            const currentImg = {
              url: elt.id,
              data: `http://34.239.44.174/uploads/pictures/${elt.url}`,
            };
            AllPictures.push(currentImg);
          });

          const dataStep = {
            title, description, latitude, longitude, AllPictures, step_date, id, travelId,
          };

          store.dispatch(saveDataStep(dataStep));
        })
        .catch((error) => console.log(error));
      break;
    }
    case SEND_DATA_UPDATE: {
      const state = store.getState();
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDAyNzAwODMsImV4cCI6MTYwMDg3NDg4Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY2hyaXN0b3BoZS12YXNzZXVyQGdtYWlsLmNvbSJ9.M5ZJlmYiHpPOlzcJK6eFJVBmRlFJkhR4NVyWvEOil6932B4F8bW4rXbfY0qnbQzuDKJiB4-Xvp6wEMof3pIsic-R6pHX8qxdWqzmWWK7RW3VNaXKO9CqB5R0iFDT9JxePGOMKUnHhOf3YMpvNTa8fC5UPT28VAFiWtOfnryYPKvPJq_OKGUMyRfY9J7JyFzTU-Bkg8mhDflIuroN9PcvT8qTQDrPgzFRWSlO5kO9NdeGuR5ap7CBE5-nuU2lLQiD8MYVWHfmgA47b6QvNtwaF9880lxHps6upTrtyqFUPaZfGfFP1l99bfVTNVU6fynFj_n6gYV7p72oi5q-CpjHlZtlSMKrqYWHodn8MbTFcrRb-kvcqXHxdG1pOWlrr4YPHLBhb31eSX0ACdI8UfELEK1vSLNxvzK-UZQ0fUDZf7KSc3HCc6iuVR1pWdgDh0A-ZVmjvHEPvt5DLO8TUsZIroJXrt0lTLtgucw9_iDScmpC75_09jPHIxapSArpEFm-Zd0-0I4XlUnV9nBVkJ26W8k7HGFcnWqdYj_ttUrlmHHx0hbkrWonBj4yFP93SmMUAmqjsRrymXTpLRXHEHwNZPEoL0cdk_u5IbFYZP-G7rUTP0WRIceNqtPT6YcO9iBVtecUScnOI2-k1VoUiCPkfR4bteH6XGeg9P7wgUOChg8';

      axios.put(`http://34.239.44.174/api/travel/${state.updateStep.travel_id}/update/${state.updateStep.id}`, {
        title: state.updateStep.title,
        description: state.updateStep.description,
        latitude: state.updateStep.latitude,
        longitude: state.updateStep.longitude,
        step_date: state.updateStep.step_date,
        'pictures-delete': state.updateStep.pictures_delete,
        'pictures-new': state.updateStep.pictures_new,
        travel_id: state.updateStep.travel_id,
        id: state.updateStep.id,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(responseUpdateStep('Success'));
        })
        .catch((error) => {
          store.dispatch(responseUpdateStep('Error'));
        });
      break;
    }

    case DELETE_STEP: {
      const state = store.getState();
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDAyNzAwODMsImV4cCI6MTYwMDg3NDg4Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY2hyaXN0b3BoZS12YXNzZXVyQGdtYWlsLmNvbSJ9.M5ZJlmYiHpPOlzcJK6eFJVBmRlFJkhR4NVyWvEOil6932B4F8bW4rXbfY0qnbQzuDKJiB4-Xvp6wEMof3pIsic-R6pHX8qxdWqzmWWK7RW3VNaXKO9CqB5R0iFDT9JxePGOMKUnHhOf3YMpvNTa8fC5UPT28VAFiWtOfnryYPKvPJq_OKGUMyRfY9J7JyFzTU-Bkg8mhDflIuroN9PcvT8qTQDrPgzFRWSlO5kO9NdeGuR5ap7CBE5-nuU2lLQiD8MYVWHfmgA47b6QvNtwaF9880lxHps6upTrtyqFUPaZfGfFP1l99bfVTNVU6fynFj_n6gYV7p72oi5q-CpjHlZtlSMKrqYWHodn8MbTFcrRb-kvcqXHxdG1pOWlrr4YPHLBhb31eSX0ACdI8UfELEK1vSLNxvzK-UZQ0fUDZf7KSc3HCc6iuVR1pWdgDh0A-ZVmjvHEPvt5DLO8TUsZIroJXrt0lTLtgucw9_iDScmpC75_09jPHIxapSArpEFm-Zd0-0I4XlUnV9nBVkJ26W8k7HGFcnWqdYj_ttUrlmHHx0hbkrWonBj4yFP93SmMUAmqjsRrymXTpLRXHEHwNZPEoL0cdk_u5IbFYZP-G7rUTP0WRIceNqtPT6YcO9iBVtecUScnOI2-k1VoUiCPkfR4bteH6XGeg9P7wgUOChg8';
      axios.delete(`http://34.239.44.174/api/travel/${state.updateStep.travel_id}/delete/${state.updateStep.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(responseUpdateStep('Success'));
        })
        .catch((error) => {
          store.dispatch(responseUpdateStep('Error'));
        });
      break;
    }
    default:
      next(action);
  }
};

export default updateStep;