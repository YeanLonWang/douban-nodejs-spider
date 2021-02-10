const express = require('express');
const douban = require('./routes/douban.js');

const app = express();

app.use(douban);

app.listen(3030, function () {
    console.log('running in http://127.0.0.1:3030');
});