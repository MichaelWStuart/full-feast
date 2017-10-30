import superagent from 'superagent'
import sendLoginStatusToReducer from '../../sync/user/login';
import sendErrorToReducer from '../../sync/error/create';

export default (user) => dispatch =>
  superagent.get('http://localhost:8082/auth/register')
    .auth(user.username, user.password)
    .withCredentials()
    .then(() => dispatch(sendLoginStatusToReducer()))
    .catch(err => {
      console.log(err.status)
      console.log(Object.keys(err))
      console.log(err.status)
      dispatch(sendErrorToReducer(err))
    });
