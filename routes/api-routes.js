// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        console.log("login")

        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authenticaticated
        res.json("/members");
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/sign-up", function(req, res) {
        console.log("made it here")
        console.log(req.body);
        db.Food.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,

        }).then(function() {
        res.redirect(307, "/api/login");


            // res.json({data: '/members'});
        }).catch(function(err) {
            console.log(err);
            res.json(err);

        console.log("made it here with smiles")

            // res.status(422).json(err.errors[0].message);
        });

    });

    app.post("/api/address", function(req, res) {
        console.log("made it to the home address")
        console.log(req.body);
        db.Address.create({
            addressfirst: req.body.addressfirst,
            addresslast: req.body.addresslast,
            address: req.body.address,
            city: req.body.city,
            zip:req.body.zip,
            addressemail: req.body.addressemail,
            addressphone: req.body.addressphone,
            
            

        }).then(function() {
        // res.redirect(307, "/members");
        res.json("/payment");



            // res.json({data: '/members'});
        // }).catch(function(err) {
        //     console.log(err);
        //     res.json(err);

        console.log("made it here with smiles")

            // res.status(422).json(err.errors[0].message);
        });

    });



    app.post("/api/payment", function(req, res) {
        console.log("made it to the home address")
        console.log(req.body);
        db.Address.create({
            cardname: req.body.cardname,
            cardnumber: req.body.cardnumber,
            months: req.body.months,
            year: req.body.year,
            cvv:req.body.cvv,
            code: req.body.code,
            
        
        }).then(function() {
        // res.redirect(307, "/members");
        res.json("/reviewOrder");



            // res.json({data: '/members'});
        // }).catch(function(err) {
        //     console.log(err);
        //     res.json(err);

        console.log("made it here with smiles and joy")

            // res.status(422).json(err.errors[0].message);
        });

    });








    // app.get("/iWantToEat", function(req, res) {
    //     req.body();
    //     res.redirect("/profiles");
    // });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                firstname: req.user.firstname,
                lastname: req.user.lastname,
                email: req.user.email,
                id: req.user.id
            });
        }

//addded this for quantity
        

// GET route for getting all of the quantities
app.get("/api/chefs", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Orders.findOne().where({id:1}).then(function(dbOrders) {
        
      // We have access to the expenses as an argument inside of the callback function
      res.json(dbOrders);
    });
  });

  // POST route for saving a new quantity
  app.post("/api/chefs", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Orders.create({
      quantity: req.body.quantity,
    //   quantity2: req.body.quantity2,
    //   quantity3: req.body.quantity3,
    //   quantity4: req.body.quantity4,
    
    }).then(function(dbOrders) {
      // We have access to the new expenses as an argument inside of the callback function
      res.json(dbOrders);
    });
  });

   // PUT route for updating expenses. We can get the updated expenses data from req.body
  app.put("/api/chefs", function(req, res) {
    db.Orders.findOne().where({id:1}).then(function(dbOrders) {
    db.Orders.update({
     quantity: req.body.quantity,
    });
     
  })
.then(function(dbOrders) {
     res.json(dbOrders)
})
    // Use the sequelize update method to update a expenses to be equal to the value of req.body
    // req.body will contain the id of the expenses we need to update
  });













    })
}
