import express from 'express'
import { CustomerController } from './customer.controller'

const router = express.Router()

router.post('/', CustomerController.createCustomer)
router.get('/', CustomerController.getAllCustomers)
router.get('/:id', CustomerController.getCustomerById)

export const CustomerRoute = router