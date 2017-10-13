$(document).ready(function() {
    // Getting references to our form and input
    var addressForm = $(".multi-step");
    var addressfirstInput = $("input#addressfirst")
    var addresslastInput = $("input#addresslast")
    var addresseInput = $("input#address");
    var addresscityInput = $("input#city")
    var zipInput = $("input#zip")
    var addressemailInput = $("input#addressemail");
    var addressphoneInput = $("input#addressphone");
    console.log(zipInput);

    // When the signup button is clicked, we validate the email and password are not blank
    addressForm.on("submit", function(event) {
        event.preventDefault()
        console.log("clicked");

        var userData = {
            addressfirst: addressfirstInput.val(),
            addresslast: addresslastInput.val(),
            address: addresseInput.val(),
            city: addresscityInput.val(),
            zip:zipInput.val(),
             addressemail: addressemailInput.val(),
            addressphone: addressphoneInput.val(),
        };

        console.log(userData);

        if (!userData.addressfirst || !userData.addresslast || !userData.address || !userData.city || !userData.zip|| !userData.addressemail || !userData.addressphone) {
            return;
        }
        // If we have an address details , run the saveAddress function
        saveAddress(userData.addressfirst,userData.addresslast, userData.address, userData.city, userData.zip, userData.addressemail, userData.addressphone);
        addressfirstInput.val("");
        addresslastInput.val("");
        addresseInput.val("");
        addresscityInput.val("");
        zipInput.val("");
        addressemailInput.val("");
        addressphoneInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function saveAddress(addressfirst,addresslast, address, city,zip,addressemail,addressphone) {
        console.log("Test");
        
        $.post("/api/address", {
            addressfirst: addressfirst,
            addresslast: addresslast,
            address: address,
            city: city,
            zip:zip,
            addressemail: addressemail,
            addressphone: addressphone,
        }).done(function(data) {
            window.location.replace(data);
            console.log("Joyoooo")
            console.log("New way!!!!")


            // If there's an error, handle it by throwing up a boostrap alert
        })
        // .catch(handleLoginErr);
    }
// console.log("Joyoooo")
    function handleLoginErr(err) {
        $("#alert.msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});