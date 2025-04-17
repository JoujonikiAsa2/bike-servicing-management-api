import { BikeRoute } from "../modules/bike/bike.route";
import { CustomerRoute } from "../modules/customer/customer.route";
import express from 'express'

const router = express.Router()

const moduleRoutes = [
    {
        path:'/customers',
        route: CustomerRoute
    },
    {
        path:'/bikes',
        route: BikeRoute
    }
]

moduleRoutes.forEach(({path, route})=>{
    router.use(path, route)
})

export default router