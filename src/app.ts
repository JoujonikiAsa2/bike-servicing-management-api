import express, { Application } from 'express';
import cors from 'cors'
import httpStatus from 'http-status';
const app:Application = express();

app.use(cors())

app.get('/', (req, res)=>{
    res.status(httpStatus.OK).send('Application is running');
})

export default app;