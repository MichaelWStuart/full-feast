import { Router } from 'express';
import Device from '../models/device';
import tokenAuth from '../middleware/token-auth';
import { cookie } from '../util';

const router = Router();

router.post('/', tokenAuth, (req, res, next) => {
  const { device, type } = req.body;
  device.deviceType = type;
  device.userId = req.user._id;
  Device.create(device, (err, result) => {
    if (err) return next(new Error(5032));
    res.send(result);
  });
});

router.put('/', tokenAuth, (req, res, next) => {
  Device.findByIdAndUpdate(
    req.body._id,
    { $set: req.body },
    { new: true },
    (err, result) => {
      if (err) return next(new Error(5032));
      res.send(result);
    }
  );
});

router.delete('/', tokenAuth, (req, res, next) => {
  const _id = req.body.id;
  if (!_id) return next(new Error(4005));
  Service.findOneAndRemove({ _id }, err => {
    if (err) return next(new Error(5033));
    res.status(200).send('two hundred');
  });
});

export default router;
