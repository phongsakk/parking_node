"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexController_1 = __importDefault(require("./controllers/indexController"));
const adminController_1 = __importDefault(require("./controllers/adminController"));
const userController_1 = __importDefault(require("./controllers/userController"));
const parkingController_1 = __importDefault(require("./controllers/parkingController"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", indexController_1.default.index);
// Authorization
app.get("/register", indexController_1.default.index);
app.post("/login", indexController_1.default.index);
// Admin routes
app.get("/admin/parkings", adminController_1.default.getParking);
app.post("/admin/parkings", adminController_1.default.postParking);
app.get("/admin/quotas", adminController_1.default.getQuotas);
app.post("/admin/quotas", adminController_1.default.postQuotas);
app.get("/admin/user/info", userController_1.default.info);
// User routes
app.get("/parking/slot", parkingController_1.default.slot);
app.post("/parking/request", parkingController_1.default.request);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
