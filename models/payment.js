// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Payment = sequelize.define("Payment", {
        // The email cannot be null, and must be a proper email before creation

      
        cardname: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,

        },
         cardnumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,

        },

        months: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            
        },
        // The password cannot be null
        year: {
            type: DataTypes.STRING,
            allowNull: true


        },
        cvv: {
            type: DataTypes.STRING,
            allowNull: true


        },
        code: {
            type: DataTypes.STRING,
            allowNull: true


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
    return Payment;
};