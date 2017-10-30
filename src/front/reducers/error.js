import { ERROR_CREATE, ERROR_DESTROY } from '../actions/constants';

export default (state, action) => {
  switch (action.type) {
    case ERROR_CREATE:
      console.log(action.payload)
      return action.payload.response;
    case ERROR_DESTROY:
    default:
      return '';
  }
};
