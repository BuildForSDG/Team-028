/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

process.env.SECRET_KEY = "secret";

// Require database
const db = require("../config/db.config");

const UserLogin = db.userLogin;
const Organization = db.userOrganization;

exports.findOne = (req, res) => {
  // let request = {
  //   email: req.body.email,
  //   password: req.body.password
  // };
  UserLogin.findOne({ where: { email: req.body.email } })
    .then((data) => {
      // Check if login credentials exist
      if (!data) {
        return res.status(401).json({
          status: "error",
          message: " Invalid username or password"
        });
      }

      bcrypt
        .compare(req.body.password, data.password)
        .then((val) => {
          if (!val) {
            return res.status(401).json({
              status: "error",
              message: " Invalid username or password"
            });
          } else {
            if (data.email === req.body.email) {
              const result = {
                category: data.category,
                email: data.email
              };
              return res.status(200).json({
                status: "success",
                result
              });
            }
          }
        })
        .catch((error) => error);
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message || "Something went wrong"
      });
    });
};
