const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const helpers = require('./helpers');


const routerHello=require('./hello')
const routerUpload=require('./upload')



const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use('/api/hello',routerHello)
//app.use(express.static(__dirname + '/uploads'));

 

app.use('/api/upload',routerUpload)

var publicDir = require('path').join(__dirname,'/uploads'); 
console.log(publicDir)
app.use(express.static(publicDir));

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})