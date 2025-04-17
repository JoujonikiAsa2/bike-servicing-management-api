import { BikeRoute } from "../modules/bike/bike.route";
import { CustomerRoute } from "../modules/customer/customer.route";
import express from 'express'
import { ServiceRecordRoute } from "../modules/service-record/service-record.route";

const router = express.Router()

const moduleRoutes = [
    {
        path:'/customers',
        route: CustomerRoute
    },
    {
        path:'/bikes',
        route: BikeRoute
    },
    {
        path:'/services',
        route: ServiceRecordRoute
    }
]

moduleRoutes.forEach(({path, route})=>{
    router.use(path, route)
})

export default router