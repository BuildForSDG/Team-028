/* eslint no-console: "error" */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodeMailer = require("nodemailer");

const secret = "serete";
const db = require("../config/db.config");

const User = db.user;
const Userpass = db.userLogin;
const Organization = db.userOrganization;

exports.create = (req, res) => {
  let today = new Date();
  let userRole = "Admin";
  let userPrivilege = "Level 1";
  let orgId = Math.floor(Math.random() * 10000) + 1;
  let userID = Math.floor(Math.random() * 100000) + 1;
  let loginID = Math.floor(Math.random() * 10000) + 1;

  //Check empty request
  if (!req.body) {
    return res.status(204).json({
      status: "error",
      message: "User details cannot be empty"
    });
  }

  let error = "";
  let status = false;
  let saved = "";
  User.findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (data) {
        // return result if data already exist
        error = "User already exist";
        return;
      } else {
        // Create new instance of  user
        const user = new User({
          userId: userID,
          organizationId: orgId,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          otherName: req.body.otherName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          role: userRole,
          privilege: userPrivilege,
          dateCreated: today
        });
        user
          .save()
          .then((data) => {
            saved = "Data saved successfully";
          })
          .catch((error) => {
            status = true;
          });
      }
    })
    .catch((error) => error);

  Organization.findOne({ where: { email: req.body.companyEmail } })
    .then((data) => {
      if (data) {
        // return result if data already exist
        error = "User already exist";
        return;
      } else {
        const organization = new Organization({
          organizationId: orgId,
          companyName: req.body.companyName,
          category: req.body.userType,
          RCNumber: req.body.rccNumber,
          email: req.body.companyEmail,
          BVN: req.body.bvn,
          address: req.body.companyAddress,
          dateIncorporated: req.body.dateIncorporated,
          createdAt: today,
          updatedAt: today
        });

        //Save organization
        organization
          .save()
          .then((data) => {
            saved = "Data saved successfully";
          })
          .catch((error) => {
            status = true;
            console.log(error);
          });
      }
    })
    .catch((error) => console.log(error));

  Userpass.findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (data) {
        // return result if data already exist
        error = "User already exist";
        return;
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            // Now we can store the password hash in db.
            if (err) {
              return res.status(401).json({
                status: "error",
                message: "Unauthorized user"
              });
            }
            const pass = new Userpass({
              loginId: loginID,
              userId: userID,
              organizationId: orgId,
              email: req.body.email,
              password: hash,
              category: req.body.userType
            });

            pass
              .save()
              .then((data) => {
                saved = "Data saved successfully";
              })
              .catch((error) => {
                status = true;
                console.log(error);
              });
          });
        });
      }
    })
    .catch((error) => console.log(error));

  if (status) {
    return res.status(500).json({
      status: "error",
      message: error
    });
  } else {
    const data = {
      category: req.body.userType,
      organizationId: orgId,
      userId: userID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      otherName: req.body.otherName,
      email: req.body.email
    };
    return res.status(200).json({
      status: "success",
      data,
      message: saved
    });
  }
};

exports.findAll = (req, res) => {
  User.findAll()
    .then((users) => {
      return res.status(200).json({
        status: "success",
        data: users
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};

// fine single user by id
exports.findOne = (req, res) => {
  User.findOne({ where: { userId: req.body.userId } })
    .then((user) => {
      res.status(200).json({
        status: "success",
        data: user
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).json({
          status: "error",
          message: "User Profile not found "
        });
      }
      return res.status(500).json({
        status: "error",
        message: err.message
      });
    });
};
