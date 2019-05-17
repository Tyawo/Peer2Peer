var express = require("express");
var router = express.Router();
var session = require("express-session");
var db = require("../models");

module.exports = function(app) {
  app.use(
    session({
      secret: "keyboard cat"
    })
  );

  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/register", function(req, res) {
    if (req.session.isAuthenticated) {
      res.redirect("/");
    }

    res.render("signup");
  });

  app.post("/register", function(req, res) {
    db.User.create({
      email: req.body.email,
      firstName: req.body.first,
      lastName: req.body.last,
      password: req.body.password
    })
      .then(function(created) {
        res.redirect("/login");
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  // Load example page and pass in an example by id
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.post("/login", function(req, res) {
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(function(found) {
        if (!found) {
          // show error to user
          return;
        }

        req.session.isAuthenticated = true;
        req.session.currentUser = found;

        res.redirect("/");
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/checkout", function(req, res) {
<<<<<<< HEAD
    if (isAuthenticated) {
      res.render("checkout");
    } else {
      res.render("/signup");
    }
=======
    res.render("checkout");
>>>>>>> 55bf8a402b2ae30ee57b96905d4766dbfadea4ed
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
