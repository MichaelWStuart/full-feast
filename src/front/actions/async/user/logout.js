import superagent from 'superagent'
import sendLogoutStatusToReducer from '../../sync/user/logout';
import sendErrorToReducer from '../../sync/error/create';
import sendDeviceDepopulateToReducer from '../../sync/device/depopulate';
import sendServiceDepopulateToReducer from '../../sync/service/depopulate';
import sendFlagDestroyAllToReducer from '../../sync/flag/destroy-all';

export default () => dispatch =>
  superagent.get('http://localhost:8082/auth/logout')
    .withCredentials()
    .then(() => dispatch(sendDeviceDepopulateToReducer()))
    .then(() => dispatch(sendServiceDepopulateToReducer()))
    .then(() => dispatch(sendFlagDestroyAllToReducer()))
    .then(() => dispatch(sendLogoutStatusToReducer()))
    .catch(err => dispatch(sendErrorToReducer(err)));
