import express, { Application } from 'express';
import cors from 'cors'
import httpStatus from 'http-status';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { apiNotFoundHandler } from './app/middlewares/apiNotFoundHandler';
const app:Application = express();

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.get('/', (req, res)=>{
    res.status(httpStatus.OK).send('Application is running');
})

app.use(apiNotFoundHandler)
app.use(globalErrorHandler)

export default app;