
$(document).ready(function () {

  $("#submit").on("click", function (event) {
    event.preventDefault();

    var newBook = {
      title: $("#book").val(),
    };

    console.log(newBook.title);
    // after clicking, this should book should be added to the readlist

    var bookVal = newBook.title
    var openLibraryUrl = `https://openlibrary.org/search.json?title=${bookVal}&limit=10`

    // Send the POST request.
    $.ajax({
      url: openLibraryUrl,
      method: "GET"
    }).then(
      function (e) {
        console.log(e);
        $(".list-books").empty();
        for (let i = 0; i < e.docs.length; i++) {
          // console.log(e.docs[i].title)
          let x = "'" + JSON.stringify(e.docs[i]) + "'";
          // let x = `${JSON.stringify(e.docs[i])}`


          // boook cover does NOT pop up on the search list but it does on the reading list html
          var a;

          if (e.docs[i].isbn) {
            a = `
          <div class="book__details">

          <div class="book-details">
              <div class="book-details__left">
                  <div class="book-details__cover">
                      <img
                          src="https://covers.openlibrary.org/b/isbn/${e.docs[i].isbn[0]}-M.jpg" alt="book cover">
                  </div>
              </div>
              <div class="book-details__right">
                  <h1 class="book-details__title readTitle ">Title: ${e.docs[i].title}</h1>
                  <h2 class="book-details__author readAuthor">Author: ${e.docs[i].author_name[0]}</h2>
                  <div class="book-details__actions">
                  ${e.docs[i].isbn[0]}
                  <button type="button" value=${x} class="readButton">Save to Reading List</button>
                  </div>
              </div>
          </div>
          
          </div>
          `
          } else {
            a = `
            <div class="book__details">
  
            <div class="book-details">
                <div class="book-details__left">
                    <div class="book-details__cover">

                    </div>
                </div>
                <div class="book-details__right">
                    <h1 class="book-details__title readTitle ">Title: ${e.docs[i].title}</h1>
                    <h2 class="book-details__author readAuthor">Author: ${e.docs[i].author_name[0]}</h2>
                    <button data-isbn="${e.docs[i].isbn[0]}" data-title="${e.docs[i].title}" data-author="${e.docs[i].author_name[0]}" type="button" value=${x} class="readButton">Save to Reading List</button>
                    </div>
                </div>
            </div>
            
            </div>
            `
          }


          $('.list-books').append(a)
        }
      }

    );

  });


  $(document).on('click', '.readButton', function (event) {
    let b = $(this).val();
    var bookObj = JSON.parse(b)

    console.log(bookObj.title)
    let newBook = {
      title: bookObj.title,
      author: bookObj.author_name[0],
      isbn: bookObj.isbn[0]
    }

    console.log(newBook)

    $.post("/api/add_book_List", newBook, () => res.status(200))

  })

});







// Leave this alone... Its Materialize initiation code
$(document).ready(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
  $(document).ready(function () {
    $('.sidenav').sidenav({
      edge: "right"
    });
    $('.parallax').parallax();
  })
});