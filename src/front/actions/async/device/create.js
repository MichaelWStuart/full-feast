import superagent from 'superagent'
import sendDeviceToReducer from '../../sync/device/create';
import sendErrorToReducer from '../../sync/error/create';

export default (device) => dispatch =>
  superagent.post('http://localhost:8082/device')
    .withCredentials()
    .send(device)
    .then(response => dispatch(sendDeviceToReducer(response.body)))
    .catch(err => dispatch(sendErrorToReducer(err)));
