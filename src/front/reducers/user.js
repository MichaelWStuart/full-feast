import { USER_LOGIN, USER_LOGOUT } from '../actions/constants';

export default (state = false, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return true;
    case USER_LOGOUT:
      return false;
    default: {
      return state;
    }
  }
};
