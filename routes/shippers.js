var express = require('express');
var router = express.Router();
const db = require('../models');
/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    let { currentPage, pageSize, limit } = req.query;
    let offset = (currentPage - 1) * limit;

    const result = await db.Shipper.findAll({ limit, offset });
    res.status(200).json({ httpCode: 200, result });
  } catch (error) {
    throw Error(error.message)
  }


});

module.exports = router;
