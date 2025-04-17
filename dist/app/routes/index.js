"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bike_route_1 = require("../modules/bike/bike.route");
const customer_route_1 = require("../modules/customer/customer.route");
const express_1 = __importDefault(require("express"));
const service_record_route_1 = require("../modules/service-record/service-record.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/customers',
        route: customer_route_1.CustomerRoute
    },
    {
        path: '/bikes',
        route: bike_route_1.BikeRoute
    },
    {
        path: '/services',
        route: service_record_route_1.ServiceRecordRoute
    }
];
moduleRoutes.forEach(({ path, route }) => {
    router.use(path, route);
});
exports.default = router;
