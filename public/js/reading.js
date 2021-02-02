$(document).ready(function () {

    const reading_List = [
        {
            title: "Money",
            author_name: "Robin Williams",
            isbn: 3824981481730894,
            read: false
        },
        {
            title: "Mario",
            author_name: "Tobin Tilliams",
            isbn: 3423534563425325,
            read: true
        }
    ]

    $()

    reading_List.map((data) => {
        let a = `
        <li>
          <div>
            <h3>${data.title}</h3>
            <h6>${data.author_name}</h6>
            <h6>${data.isbn}</h6>
          </div>
          <button type="button" class="removeButton">Remove</button>
        </li>
      `

      $("ul").append(a);

    })





})