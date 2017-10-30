import superagent from 'superagent'
import sendServiceToReducer from '../../sync/service/create';
import sendErrorToReducer from '../../sync/error/create';

export default (service) => dispatch => {
  console.log('service dispatch', service)
  return superagent.post('http://localhost:8082/service')
    .withCredentials()
    .send(service)
    .then(response => dispatch(sendServiceToReducer(response.body)))
    .catch(err => {
      console.log(err)
      return dispatch(sendErrorToReducer(err))
    });
}
