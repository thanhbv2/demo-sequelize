const express = require('express');
const app = express()
const router = express.Router();
const ShipperRoute = require('./shippers');

app.use('/', ShipperRoute.getInstance().registerRoute(router));
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });



module.exports = app;
