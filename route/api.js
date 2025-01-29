const express = require('express');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const router = express.Router();

const Login = require('../controller/LoginController');
const  getAllUsers  = require('../controller/UserController');
const Register = require('../controller/RegisterController');

const isAuthenticated = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
  
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
  
      const bearerToken = bearer[1];
  
      jwt.verify(bearerToken, secret.ACCESS_TOKEN_SECRET, (err, decoded) => {
        console.log(decoded);
        if (err) {
          res.sendStatus(403);
        }
  
        if (decoded) {
          req.token = bearerToken;
          // req.cookies.token;
          next();
        }
      });
    } else {
      // forbidden
      // console.log('there was a problem with the req');
      res.sendStatus(403);
    }
  };

router.post('/login', Login)
router.post('/register', Register)
router.get('/getusers', isAuthenticated, getAllUsers)

module.exports = router;