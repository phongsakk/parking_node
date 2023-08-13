const express = require('express');
const indexController = require('./controllers/indexController');
const app = express()

app.get('/', indexController.index);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})