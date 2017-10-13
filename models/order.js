module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {

        // email: {
        //     type: DataTypes.STRING
            
        // },
         product: {
            type: DataTypes.STRING
        
        },

        price: {
            type: DataTypes.INTEGER
            
            
        },
        
        quantity: {
            type: DataTypes.INTEGER


        },

        total: {
            type: DataTypes.INTEGER



        }


     
            
    });
    return Order;
  };
  