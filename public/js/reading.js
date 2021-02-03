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
                <button class="">Remove</button>
            </div>
        </div>
    </div>
    
    </div>
        `

            $("article").append(a);

        })
    }



})