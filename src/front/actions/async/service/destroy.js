import superagent from 'superagent'
import sendServiceToReducer from '../../sync/service/destroy';
import sendErrorToReducer from '../../sync/error/create';

export default (id, type) => dispatch => {
  superagent.delete('http://localhost:8082/service')
    .withCredentials()
    .send({ id })
    .then(() => dispatch(sendServiceToReducer({ id, type })))
    .catch(err => dispatch(sendErrorToReducer(err)))
  };
