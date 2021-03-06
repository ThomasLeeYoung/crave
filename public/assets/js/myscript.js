$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login3");
    var emailInput = $("input#email-input1");
    var passwordInput = $("input#password-input1");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val(),
            password: passwordInput.val()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        console.log("Made it here11")
        $.post("/api/login", {
            email: email,
            password: password
        }).done(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        // })
    //    window.location.replace("/members");
    
        })
    }
})
//     function signUpUser(email, password) {
//     $.post("/api/signup", {
//       email: email,
//       password: password
//     }).then(function(data) {
//       window.location.replace(data);
//       // If there's an error, handle it by throwing up a boostrap alert
//     }).catch(handleLoginErr);
//   }

