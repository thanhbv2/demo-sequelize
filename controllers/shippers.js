const db = require('../models');
const ShipperService = require('../services/ShipperService');

class ShipperRoute {
  constructor() {
    this.instance;
  }

  static getInstance() {
    if (!this.instance) {
      return this.instance = new ShipperRoute();
    }
    return this.instance;
  }

  registerRoute(router) {
    return router
      .get('/shippers', this.get)
      .post('/shippers', this.create)
      // .put('/shippers/:id', this.update)
  }

  async get(req, res, next) {
    res.status(200).json({ message: "hello" })
  }

  // validation = {status: false, failures: [{field: 'username', message: 'nhap username'}]}
  // validation = {status: true, failures: []}

  async create(req, res, next) {
    const data = req.body;
    try {
      const response = await ShipperService.createShipper(data);
      res.status(response.httpCode).json(response);
    } catch (error) {
      next(error.message);
    }
  }


}

module.exports = ShipperRoute;