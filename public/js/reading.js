$(document).ready(function () {

    getBooks();

    function getBooks() {
        $.get("/api/get_list", function (books) {
            var rowsToAdd = [];

            rowsToAdd.push(createBookRow(books))

        });
    }


    function createBookRow(allBooks) {
        console.log(allBooks);

        allBooks.map((data) => {
            console.log(data)
            let a = `
          <div class="book__details">
    
    <div class="book-details">
        <div class="book-details__left">
            <div class="book-details__cover">
                <img src="https://covers.openlibrary.org/b/isbn/${data.isbn}-M.jpg" alt="book cover">
            </div>
        </div>
        <div class="book-details__right">
            <h1 class="book-details__title readTitle ">${data.title}</h1>
            <h2 class="book-details__author readAuthor">${data.author}</h2>
            <div class="book-details__actions">
                <button id="delete">Remove</button>
            </div>
        </div>
    </div>
    
    </div>
        `

            $("article").append(a);

            $(this).on('click', function (event) {
                event.preventDefault();

                deleteBook();

            })


            // grab the ID
            function deleteBook() {
                // var title = $(this)[0].document.body.children[3];
                // var title2 = document.getElementsByClassName("readTitle").innerHTML
                // console.log(title);
                // console.log(title2);
                var id = data.id;


                $.ajax({
                    method: "DELETE",
                    url: `/api/remove_book/${id}`
                }).then(getBooks);
            }


        })
    }

})
