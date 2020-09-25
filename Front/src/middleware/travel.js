import axios from 'axios';
import Cookies from 'js-cookie';
import {
  FETCH_DATA_FOR_SINGLE_TRAVEL,
  FETCH_DATA_FOR_GUEST,
  saveDataForSingleTravel,
  fetchDataForGuest,
  FETCH_DATA_FOR_URL_SHARE,
  saveDataForUrlShare,
  errorUnthorizedTravel,
} from '../actions/travel';

const travel = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_SINGLE_TRAVEL: {
      const state = store.getState();
      const token = Cookies.get('token');

      axios.get(`http://34.239.44.174/api/travels/${action.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(saveDataForSingleTravel(response.data));
        })
        .catch((error) => store.dispatch(fetchDataForGuest(action.id, action.token)));
      break;
    }
    case FETCH_DATA_FOR_GUEST: {
      const state = store.getState();
      axios.get(`http://34.239.44.174/travels/${action.id}/${action.slug}`)
        .then((response) => {
          store.dispatch(saveDataForSingleTravel(response.data));
        })
        .catch((error) => store.dispatch(errorUnthorizedTravel()));
      break;
    }
    case FETCH_DATA_FOR_URL_SHARE: {
      const token = Cookies.get('token');
      axios.get(`http://34.239.44.174/api/generate_url/${action.value}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const allUrl = `http://34.202.233.128/travels/${response.data.id}/${response.data.url_token}`;
          const pCreate = document.createElement('p');
          const divElement = document.querySelector('.travelPage__shareDiv');
          const divCopyElement = document.querySelector('.shareUrlCopy');
          divCopyElement.style.display = 'block';
          pCreate.setAttribute('id', 'copyMe');
          pCreate.className = 'shareUrl';
          pCreate.innerHTML = allUrl;
          divElement.appendChild(pCreate);
          store.dispatch(saveDataForUrlShare(allUrl));
        })
        .catch((error) => console.log(error));
      // store.dispatch(saveDataForUrlShare(url))
      break;
    }
    default:
      next(action);
  }
};

export default travel;
