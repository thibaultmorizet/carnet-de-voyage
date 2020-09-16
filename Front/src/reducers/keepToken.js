import { KEEP_TOKEN } from '../actions/keepToken';

export const initialState = {
  token: '',
};

const keepToken = (state = initialState, action = {}) => {
  switch (action.type) {
    case KEEP_TOKEN:
      return {
        ...state,
        token: action.value,
      };
    default:
      return state;
  }
};

export default keepToken;

// {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDAwOTAwNDYsImV4cCI6MTYwMDA5MzY0Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2VidG9vcm9wQGdtYWlsLmNvbSJ9.b5tyH0EYtgXMGjuCP0dSR-wxISE7Hcu91dkLw0o5XcGqGynBv1Yd7aI5RMqG_Fa6P72x_kiSHUPBcfHbqMIZMTxC3kJLcRmWSvO0X6J_QeK02q2CkEJc9eo0WScXhUnnbSv8FWowEXmm-K_yZg55kegRBxjJGMbH5VuCBDgRykmeSfMsLj8e97LA7uRkZc3BFd_2Y2yVCFJWa3JtjoHP8Lzp8iesg6vfPtSHIweKBZ1BoMbBE6uTqdT45oRqconkJHzB1LUaKRwPNRvk50VNs7dai3ZohGkHPhDeXlPPo1hQFxYF4EAF19AZdacU_kC5yod1glT_g95xCGNeJ4wNWstEimCw8pdRQurgoc8lAdj4bNDH1QWxygI-yWr9bTWH_syWMb1kdhpHrMoP7LKHpU07xbrcmskqWSxmRAY5oPW5puoeIdhKjgSPwOI-MHwK0isv39wUkpuyPBxmYbDtVAXGmDXB0Ocl-NGP7U7OdLitGsD4XihCDUPUThv-k0p0LhWELj0MHKd0zPcQFSFFQxtecAZK-B8n3wCXYzZAr7UKuXbnyit5KQi5sz6rcJqGh8DJaBymlVKGru_aPXDy4Mt5aINBP4DmqK0Fm922Qizt-2NnpKdF5njTsayaLZPeM9tv2B8Wad0iXTOZplLqw9l6K_XobplnP-aLs57MbQA"}
