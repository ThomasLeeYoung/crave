$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text("Welcome" + ", " + data.firstname );
    // $(".member-name").text(data.lastname);

   $.get("/api/user_data").then(function(data) {
    $(".membername").text( data.firstname );
    // $(".member-name").text(data.lastname);


 });
});
 });