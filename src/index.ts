import express, { json } from "express";
import indexController from "./controllers/indexController";
import adminController from "./controllers/adminController";
import userController from "./controllers/userController";
import parkingController from "./controllers/parkingController";

const app = express();
app.use(json());

const port = 3000;

app.get("/", indexController.index);

// Authorization
app.post("/register", indexController.register);
app.post("/login", indexController.login);

// Admin routes
app.get("/admin/parkings", adminController.getParking);
app.post("/admin/parkings", adminController.postParking);
app.get("/admin/quotas", adminController.getQuotas);
app.post("/admin/quotas", adminController.postQuotas);

app.get("/admin/user/info", userController.info);

// User routes
app.get("/parking/slot", parkingController.slot);
app.post("/parking/request", parkingController.request);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
