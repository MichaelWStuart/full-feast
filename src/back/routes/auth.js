import { Router } from 'express';
import User from '../models/user';
import basicAuth from '../middleware/basic-auth';
import tokenAuth from '../middleware/token-auth';
import { cookie, noCookie } from '../util';

const router = Router();

router.get('/register', basicAuth, (req, res, next) => {
  User.create({ ...req.credentials })
    .then(token => res.cookie(...cookie(token)).send())
    .catch(err => next(new Error(err.code)));
});

router.get('/login', basicAuth, (req, res, next) => {
  const { username, password } = req.credentials;
  User.findOne({ username }).then(user => {
    if (!user) return next(new Error(4011));
    user.passwordHashCompare(password)
      .then(user => user.tokenSeedRefresh()
        .then(token => res.cookie(...cookie(token)).send())
        .catch(err => next(new Error(5031))))
      .catch(err => next(new Error(4010)))
    });
});

router.get('/restore', tokenAuth, (req, res, next) => {
  req.user.tokenSeedRefresh()
    .then(token => res.cookie(...cookie(token)).send())
    .catch(err => next(new Error(5031)));
});

router.get('/logout', tokenAuth, (req, res) => {
  res.cookie(...noCookie()).send();
});

export default router;
