import axios from 'axios';
import { SAVE_STEP } from 'src/actions/createStep';

const CreateStep = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};
export default CreateStep;
