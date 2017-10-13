
$(document).ready(function() {
  // Getting references to our form and input
  var quantityForm = $("form.quantity-form");
  var newItemInput = $("input.new-item");
  var newItemInput2 = $("input.new-item2");
  var newItemInput3 = $("input.new-item3");
  var newItemInput4 = $("input.new-item4");

  // When the signup button is clicked, we validate the email and password are not blank
  quantityForm.on("submit", function(event) {
      event.preventDefault();
      var quantityData = {
          quantity: newItemInput.val().trim(),
          quantity2: newItemInput2.val().trim(),
          quantity3: newItemInput3.val().trim(),
          quantity4: newItemInput4.val().trim(),
      };

              // If we have an email and password, run the signUpUser function
      addQuantity(quantityData.quantity, quantityData.quantity2,quantityData.quantity3,quantityData.quantity4);
      newItemInput.val("");
      newItemInput2.val("");
      newItemInput3.val("");
      newItemInput4.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function quantity(quantity, quantity2, quantity3, quantity4) {
      $.post("/api/chefs", {
          quantity: quantity,
          quantity2: quantity2,
          quantity3: quantity3,
          quantity4: quantity4,
         
          
      }).then(function(data) {
          window.location.replace(data);
          // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
  }
});
