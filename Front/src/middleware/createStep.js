import axios from 'axios';
import { SAVE_STEP, saveDataStep } from 'src/actions/createStep';

const CreateStep = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_STEP: {
      const state = store.getState();
      const travelId = state.createStep.travel_id;
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDAwOTM1MjcsImV4cCI6MTYwMDY5ODMyNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2VidG9vcm9wQGdtYWlsLmNvbSJ9.mJfhN2bLk3PgAdPG6YZH7UQmRolaJALG25AWPJsFQsZOOGWKobqo3cWbq9k95Mhtd6_8hq46MMEUIYCPZjo0dGnOj5TaQdCk2yj9d0VjggstEtDLp5gAuJ3ngN7GUDHbKsHMX8lJEDkKc9HwtNRezeBWFy5yAZu2f5uDJ-josBorxf8dqoqhwkQv7jQBkmGJU1VcYey35VoI9dBv_lTB0xJGGO_t1mfe2E9EHm9iI-F4EWBcUstXHf03WVzWfvQi_R2N46WR4knXSkFFZiK_QySRjbPet85cq8WYZBHGXKaVoKKOblyxGFo8aXTEH788tuBMAPpfcmUhOXKZcfFShBsqCYRnqmGSgRr9BntiWoCWK8IVnvEH7cmyJYWB67DyrdrsVBZIhy9JRRFPw3p7ZArER5dZ6hzh11PNnoYTDxL6xMPRI_K3UBtrvU3hAbF90pl69jkp51OGcFpBiQA42zfIi6OLfcCswG-WzBCz7c0eDwO7PKDGrN1sfQdxN9vlyXWQqA55bUzmZeV0HHTxZFwq1_J12twXecFf5lc0Ozvk1hCUx2Pwt3mSqhKK7khFb6XKEl1muU5jvB5HLC5MdL_8MJtK1z07mknHoO0VPm9DUX_X_QCEzi7N5yy2dc-tJ7gBVcIrT7BDZmbW2iUIA5HXgKj413Wihdwr_3KYyec';

      axios.post(`http://34.239.44.174/api/travel/${travelId}/add`, {
        title: state.createStep.title,
        description: state.createStep.description,
        latitude: state.createStep.latitude,
        longitude: state.createStep.longitude,
        step_date: state.createStep.step_date,
        picture: state.createStep.picture,
        travel_id: state.createStep.travel_id,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const actioToDispatch = saveDataStep('Success');
          store.dispatch(actioToDispatch);
        })
        .catch((error) => {
          console.log(error);
          const actioToDispatch = saveDataStep(error.name);
          store.dispatch(actioToDispatch);
        });
      break;
    }
    default:
      next(action);
  }
};
export default CreateStep;