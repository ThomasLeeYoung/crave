// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/signup");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
        
    });


     app.get("/signin", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/");
        }
        res.sendFile(path.join(__dirname, "../public/signin.html"));
        
    });



    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/clientProfiles.html"));
    });

    app.get("/cuisine", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cuisine.html"));
    });

    app.get("/iWantToEat", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profiles.html"));
    });

    app.get("/chefs", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/chefprofiles.html"));
    });

    app.get("/address", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/address.html"));
    });

    app.get("/payment", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/payment.html"));
    });

    app.get("/reviewOrder", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reviewOrder.html"));
    });

   


};

