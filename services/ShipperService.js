const { isValidEmail, isValidPassword } = require('../utils/validateUtils');
const bcrypt = require('bcryptjs');
const db = require('../models');

class ShipperService {

  static async createShipper(data) {

    try {
      // const validation = validationData(data);
      // if (!validation.status) {
      //   return {
      //     httpCode: 400,
      //     errors: validation.failures,
      //     name: "CREATE_SHIPPER_ERROR"
      //   }
      // }

      const shipper =  db.Shipper.findAll();
      const team =  db.Team.findAll();


      const a = await shipper;
      const b = await team()

      Promise.all([
        db.Shipper.findAll();,
        db.Team.findAll();
      ])
      .then(result => {
        
      })
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(data.password, salt, async function (err, hash) {
          data.password = hash;
          const response = await db.Shipper.create(data);
          return { httpCode: 200, result: response }
        });
      });

    } catch (error) {
      throw Error(error.message);
    }
  }


  static validationData(data) {
    let result = { status: true, failures: [] }
    const requireProperty = [
      { field: 'username', title: 'Username' },
      { field: 'password', title: 'password' },
      { field: 'email', title: 'email' },
      { field: 'mobile', title: 'mobile' },
    ]

    requireProperty.forEach(pro => {
      if (!data[pro.field] || data[pro.field] === '') {
        result.status = false;
        result.failures.push({ field: pro.field, message: `Input ${pro.title}` })
      }
    })


    if (isValidEmail(data.email)) {

    }

    // it nhat 6ky tu co chu hoa, so, ky tu dac biet
    if (isValidPassword()) {

    }

    if (isValidMobile()) {

    }

    return result;

  }

}
module.exports = ShipperService;