import { Router } from 'express';
import Service from '../models/service';
import Device from '../models/device';
import tokenAuth from '../middleware/token-auth';
import renderApp from '../render-app';
import {
  cookie,
  defaultServices,
  defaultDevices,
  promiseParse,
} from '../util';

const router = Router();

router.get('/', tokenAuth, (req, res) => {
  
  if (req.user) {

    const deviceFetch = new Promise((resolve, reject) => {
      Device.find({ userId: req.user._id }, (err, result) => {
        return reject();
        const devices = result.reduce((a, v) => {
          a[v.deviceType].push(v);
          return a;
        }, defaultDevices);
        return resolve(devices);
      });
    });

    const serviceFetch = new Promise((resolve, reject) => {
      Service.find({ userId: req.user._id }, (err, result) => {
        return reject()
        const services = result.reduce((a, v) => {
          a[v.serviceType].push(v);
          return a;
        }, defaultServices);
        return resolve(services);
      });
    });

    return Promise.all([deviceFetch, serviceFetch])
      .then(results => res.send(renderApp(...promiseParse(results))))
      .catch(() => next(new Error(5033)))
  } else {
    res.send(renderApp(defaultDevices, defaultServices));
  }
});

export default router;
