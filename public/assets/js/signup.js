$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.sign-up-form");
    var firstnameInput = $("input#firstname-input")
    var lastnameInput = $("input#lastname-input")
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            firstname: firstnameInput.val(),
            lastname: lastnameInput.val(),
            email: emailInput.val(),
            password: passwordInput.val()
        };

        if (!userData.firstname || !userData.lastname || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.firstname,userData.lastname, userData.email, userData.password);
        firstnameInput.val("");
        lastnameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstname,lastname, email, password) {
        $.post("/api/sign-up", {
            firstname: firstname,
            lastname:lastname,
            email: email,
            password: password
        }).done(function(data) {
            window.location.replace(data);
            // If there's an error, handle it by throwing up a boostrap alert
        })
        // .catch(handleLoginErr);
    }
console.log("Joy")
    function handleLoginErr(err) {
        $("#alert.msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});