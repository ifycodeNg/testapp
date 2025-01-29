const bcrypt = require('bcrypt');
const sequelize = require('../models/db');

const SignUp = async (req, res, next) => {
  const { email } = req.body;
  const pword = req.body.password;
  const role = 'admin';

console.log(pword)
  const generateHash = function (pwrd) {
    return bcrypt.hashSync(pwrd, bcrypt.genSaltSync(8), null);
  };

  const dataEntry = sequelize.User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        res.type('application/json');
        return res.status(200).json({ msg: 'Email Already Taken' });
      }

      const userPassword = generateHash(pword);

      const data = {
        email,
        password: userPassword,
        role,
        isConfirmed: 0,
        isBlocked: 0,
      };

      const createU = sequelize.User.create(data)
        .then((newUser) => {
          if (!newUser) {
            res.type('application/json');
            return res.status(200).json({ msg: 'Error Creating User' });
          }

          if (newUser) {
            console.log(newUser);
            res.type('application/json');
            return res.status(201).json({ msg: 'Account Created Successfully' });
          }
        })
        .catch((err) => {
          next(err);
        });

      return createU;
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
  
    }

module.exports = SignUp;
