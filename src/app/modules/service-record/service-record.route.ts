import express from 'express'
import { ServiceRecordController } from './service-record.controller'

const router = express.Router()

router.post('/', ServiceRecordController.addServiceRecord)
router.get('/', ServiceRecordController.getAllServiceRecords)
router.get('/:id', ServiceRecordController.getServiceRecordById)
router.put('/:id/complete', ServiceRecordController.markAsComplete)

export const ServiceRecordRoute = router