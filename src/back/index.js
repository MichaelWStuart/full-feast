import {} from 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import initRoute from './routes/init';
import authRoutes from './routes/auth';
import deviceRoutes from './routes/device';
import serviceRoutes from './routes/service';
import errorHandler from './middleware/error-handler';

mongoose.connect(process.env.DB_URI);

const PORT = process.env.PORT || 8082;

express()
  .use('/static', express.static('dist'))
  .use(cookieParser())
  .use(bodyParser.json())
  .use('/init', initRoute)
  .use('/auth', authRoutes)
  .use('/device', deviceRoutes)
  .use('/service', serviceRoutes)
  .use(errorHandler)
  .listen(PORT, () => console.log(`server up on ${PORT}`));
