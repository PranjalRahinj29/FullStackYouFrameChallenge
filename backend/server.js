const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const routerUpload = require('./upload')
const routerGetFileUrls = require('./get_file_urls')

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.use('/api/upload', routerUpload)
app.use('/api/imageUrls', routerGetFileUrls)


var publicDir = path.join(__dirname, '/uploads');
app.use(express.static(publicDir));

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})