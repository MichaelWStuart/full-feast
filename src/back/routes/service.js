import { Router } from 'express';
import Service from '../models/service';
import tokenAuth from '../middleware/token-auth';
import { cookie } from '../util';

const router = Router();

router.post('/', tokenAuth, (req, res, next) => {
  const { service, type } = req.body;
  service.serviceType = type;
  service.userId = req.user._id;
  Service.create(service, (err, result) => {
    if (err) return next(new Error(5032));
    res.send(result);
  });
});

router.put('/', tokenAuth, (req, res, next) => {
  const id = req.body._id;
  if (!id) return next(new Error(4005));
  Service.findByIdAndUpdate(id, req.body, err => {
    if (err) return next(new Error(5033));
    res.status(200).send('two hundred');
  })
})

router.delete('/', tokenAuth, (req, res, next) => {
  const _id = req.body.id;
  if (!_id) return next(new Error(4005));
  Service.findOneAndRemove({ _id }, err => {
    if (err) return next(new Error(5033));
    res.status(200).send('two hundred');
  });
});

export default router;
