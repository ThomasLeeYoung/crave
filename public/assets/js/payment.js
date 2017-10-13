$(document).ready(function() {
    // Getting references to our form and input
    var paymentUpForm = $(".multistep");
    var cardnameInput = $("input#cardname")
    var cardnumberInput = $("input#cardnumber")
    var monthsInput = $("input#months");
    var yearInput = $("input#year");
    var cvvInput = $("input#cvv");
    var codeInput = $("input#code");
    console.log(monthsInput)
     

    // When the signup button is clicked, we validate the email and password are not blank
    paymentUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            cardname: cardnameInput.val(),
            cardnumber: cardnumberInput.val(),
            months: monthsInput.val(),
            year: yearInput.val(),
            cvv: cvvInput.val(),
            code: codeInput.val()
          
        };

        if (!userData.cardname || !userData.cardnumber || !userData.months || !userData.year|| !userData.cvv|| !userData.code) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        payMent(userData.cardname,userData.cardnumber, userData.months, userData.year, userData.cvv, userData.code);
        cardnameInput.val("");
        cardnumberInput.val("");
        monthsInput.val("");
        yearInput.val("");
        cvvInput.val("");
        codeInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function payMent(cardname,cardnumber, months, year,cvv,code) {
        $.post("/api/payment", {
            cardname: cardname,
            cardnumber:cardnumber,
            months: months,
            year: year,
            cvv:cvv,
            code:code
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