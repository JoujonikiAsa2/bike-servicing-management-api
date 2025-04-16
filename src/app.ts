import express, { Application } from 'express';
import cors from 'cors'
import httpStatus from 'http-status';
import router from './app/routes';
const app:Application = express();

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.get('/', (req, res)=>{
    res.status(httpStatus.OK).send('Application is running');
})

export default app;