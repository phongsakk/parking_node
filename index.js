const express = require('express');
const indexController = require('./controllers/indexController');
const adminController = require('./controllers/adminController');
const userController = require('./controllers/userController');
const parkingController = require('./controllers/parkingController');
const app = express()

app.get('/', indexController.index);

// Authorization
app.post('register', indexController.index);
app.post('login', indexController.index);

// Admin routes
app.get('admin/parkings', adminController.getParking);
app.post('admin/parkings', adminController.postParking);
app.get('admin/quotas', adminController.getQuotas);
app.post('admin/quotas', adminController.postQuotas);

app.get('admin/user/info', userController.info);

// User routes
app.get('parking/slot', parkingController.slot);
app.post('parking/request', parkingController.request);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})