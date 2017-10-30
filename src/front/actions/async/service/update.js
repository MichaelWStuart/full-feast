import superagent from 'superagent'
import sendServiceToReducer from '../../sync/service/update';
import sendErrorToReducer from '../../sync/error/create';

export default (type, service) => dispatch => {
  superagent
    .put('http://localhost:8082/service')
    .withCredentials()
    .send(service)
    .then(() => dispatch(sendServiceToReducer({ type, service })))
    .catch(err => dispatch(sendErrorToReducer(err)));
  }
