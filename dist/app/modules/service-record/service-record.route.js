"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_record_controller_1 = require("./service-record.controller");
const router = express_1.default.Router();
router.post('/', service_record_controller_1.ServiceRecordController.addServiceRecord);
router.get('/', service_record_controller_1.ServiceRecordController.getAllServiceRecords);
router.get('/status', service_record_controller_1.ServiceRecordController.getPendingServiceRecords);
router.get('/:id', service_record_controller_1.ServiceRecordController.getServiceRecordById);
router.put('/:id/complete', service_record_controller_1.ServiceRecordController.markAsComplete);
exports.ServiceRecordRoute = router;
