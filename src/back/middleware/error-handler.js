const handler = (err, req, res, next) => {
  const error = err.message;
  let code = 500;
  let message = 'General';

  console.log(err);

  switch (error) {
  case '4000':
    code = 400;
    message = 'Missing registration credentials';
    break;
  case '4001':
    code = 400;
    message = 'Missing login credentials';
    break;
  case '4002':
    code = 400;
    message = 'Basic authorization failed';
    break;
  case '4003':
    code = 400;
    message = 'Token authorization failed';
    break;
  case '4004':
    code = 400;
    message = 'Session restore failed';
    break;
  case '4005':
    code = 400;
    message = 'User ID not found';
    break;
  case '4010':
    code = 401;
    message = 'Incorrect password';
    break;
  case '4011':
    code = 401;
    message = 'Username not found';
    break;
  case '5031':
    code = 503;
    message = 'Server failed to generate token';
    break;
  case '5032':
    code = 503;
    message = 'Server failed to create resource';
    break;
  case '5033':
    code = 503;
    message = 'Server failed to retrieve resource';
    break;
  case '11000':
    code = 409;
    message = 'Duplicate username or email';
    break;
  }
  res.status(code).send(message);
};

export default handler;
