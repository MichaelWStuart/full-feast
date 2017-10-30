import {
  SERVICE_CREATE,
  SERVICE_UPDATE,
  SERVICE_DESTROY,
  SERVICE_POPULATE,
  SERVICE_DEPOPULATE,
} from '../actions/constants';

const defaultServices = {
  'software-key': [],
  'support-vendor': [],
  'email-provider': [],
  'web-host-provider': [],
  isp: [],
  'data-file': [],
  'database-provider': [],
  upgrade: [],
  warranty: [],
};

export default (state = defaultServices, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case SERVICE_CREATE:
      nextState[action.payload.serviceType].push(action.payload);
      return nextState;
    case SERVICE_UPDATE:
      nextState[action.payload.type] = nextState[action.payload.type].map(s =>
        s._id === action.payload.service._id ? action.payload.service : d);
      return nextState;
    case SERVICE_DESTROY:
      nextState[action.payload.type] = nextState[action.payload.type].filter(s =>
        s._id !== action.payload.id);
      return nextState;
    case SERVICE_DEPOPULATE:
      return defaultServices;
    default:
      return nextState;
  }
};
