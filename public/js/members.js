// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
//   $.get("https://www.googleapis.com/books/v1/volumes?q=search+terms").then(function(data) {
//     console.log(data)
//   });
// });
$(document).ready(function () {

  $("#submit").on("click", function (event) {
    event.preventDefault();

    var newBook = {
      title: $("#book").val(),
    };
    
    console.log(newBook.title);
    // after clicking, this should book should be added to the readlist


    // Send the POST request.
    $.ajax("/api/books", {
      type: "POST",
      data: newBook
    }).then(
      function() {
        console.log("created new book");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  
  });



});


// Leave this alone... Its Materialize initiation code
$(document).ready(function () {
  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function () {
      $('.sidenav').sidenav({
          edge: "right"
      });
      $('.parallax').parallax();
  })
  $.get("https://www.googleapis.com/books/v1/volumes?q=Robin+intitle").then(function (data) {
      console.log(data)
  });


});





// $(function() {
//   $(document).on("click", ".devour", function(event) {
//     event.preventDefault();
//     var id = $(this).data("id");
//     var boolean = $(this).data("neweatenstatus");
//     console.log(boolean);

//     // this var helps the ajax to read if its true or false
//     // this is used in line 16 in the ajax
//     var newEatenStatus = {
//       eatenKey: boolean
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newEatenStatus
//     }).then(
//       function() {
//         console.log("changed sleep to", boolean);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event. AKA no reload
//     event.preventDefault();

//     var newBurger = {
//       // this is where the input goes aka the name 
//       name: $("#ca").val().trim(),
//       // Idk why the "checked" is there but this checks to 
//       // see if the value is eatenKey or awake
//       eatenKey: $("[name=eatenKey]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-cat").on("click", function(event) {
//     let id = $(this).data("id");

//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   })
// });