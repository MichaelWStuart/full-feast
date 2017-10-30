import { combineReducers } from 'redux';

import device from './device';
import service from './service';
import error from './error';
import user from './user';

export default combineReducers({ device, service, error, user });
