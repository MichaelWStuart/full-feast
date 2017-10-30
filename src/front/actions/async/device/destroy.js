import superagent from 'superagent';
import sendDeviceToReducer from '../../sync/device/destroy';
import sendErrorToReducer from '../../sync/error/create';

export default (type, id) => dispatch =>
  superagent
    .delete('http://localhost:8082/device')
    .withCredentials()
    .send({ id })
    .then(() => dispatch(sendDeviceToReducer({ id, type })))
    .catch(err => dispatch(sendErrorToReducer(err)));
