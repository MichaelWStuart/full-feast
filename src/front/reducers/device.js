import {
  DEVICE_CREATE,
  DEVICE_UPDATE,
  DEVICE_DESTROY,
  DEVICE_POPULATE,
  DEVICE_DEPOPULATE,
} from '../actions/constants';

export const defaultDevices = {
  desktop: [],
  laptop: [],
  server: [],
  router: [],
  printer: [],
  phone: [],
  tablet: [],
};

export default (state = defaultDevices, action) => {
  console.log('STATE', state);
  const nextState = { ...state };
  switch (action.type) {
    case DEVICE_CREATE:
      nextState[action.payload.deviceType].push(action.payload);
      return nextState;
    case DEVICE_UPDATE:
      nextState[action.payload.deviceType] = nextState[
        action.payload.deviceType
      ].map(d => (d._id === action.payload._id ? action.payload : d));
      return nextState;
    case DEVICE_DESTROY:
      nextState[action.payload.type] = nextState[action.payload.type].filter(
        d => d._id !== action.payload.id,
      );
      return nextState;
    case DEVICE_DEPOPULATE:
      return defaultDevices;
    default:
      return nextState;
  }
};
