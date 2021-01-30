$(document).ready(function () {
    $("#delete").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("/api/books/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted book")
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
});