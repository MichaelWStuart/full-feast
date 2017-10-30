import superagent from 'superagent';
import sendDevicesToReducer from '../../sync/device/update';
import sendErrorToReducer from '../../sync/error/create';

export default (type, device) => dispatch =>
  superagent
    .put('http://localhost:8082/device')
    .withCredentials()
    .send(device)
    .then(() => dispatch(sendDevicesToReducer({ type, device })))
    .catch(err => dispatch(sendErrorToReducer(err)));
