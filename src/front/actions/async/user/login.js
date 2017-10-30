import superagent from 'superagent'
import sendLoginStatusToReducer from '../../sync/user/login';
import sendErrorToReducer from '../../sync/error/create';

export default (user) => dispatch =>
  superagent.get('http://localhost:8082/auth/login')
    .auth(user.username, user.password)
    .withCredentials()
    .then(() => dispatch(sendLoginStatusToReducer()))
    .catch(err => dispatch(sendErrorToReducer(err)));
