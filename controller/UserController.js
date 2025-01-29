const sequelize = require('../models/db');
const users = require('../models/model/users');

const getAllUsers = async (req,res) => {
    try {
      const users = await sequelize.User.findAll({
        attributes: { exclude: ["password"] }, // Exclude passwords from response
      });
      console.log("Users:", users.map(user => user.toJSON()));
      res.type('application/json');
    return res.status(200).json(users);
    } catch (error) {
        res.send(error);
      console.error("Error fetching users:", error);
    }
  };

module.exports = getAllUsers;
