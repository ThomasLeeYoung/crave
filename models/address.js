// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        // The email cannot be null, and must be a proper email before creation

     
       addressfirst: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,

       },
         addresslast: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,

           
       },
        // The password cannot be null
        address: {
            type: DataTypes.STRING,
            allowNull: false


       },
        city: {
            type: DataTypes.STRING,
            allowNull: false


       },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: true


       },
        
       addressemail: {
            type: DataTypes.STRING,
            allowNull: false,
             validate: {
                isEmail: true
            }


       }
        ,
        addressphone: {
            type: DataTypes.INTEGER,
            allowNull: false


       }
      
       
 
    // // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    // Address.prototype.validPassword = function(password) {
    //     return bcrypt.compareSync(password, this.password);
    // };
    // // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // // In this case, before a User is created, we will automatically hash their password
    // Address.hook("beforeCreate", function(food) {
    //     food.password = bcrypt.hashSync(food.password, bcrypt.genSaltSync(10), null);
    });
    return Address;
};