let movies = [];

$(function() {
    $('.movie-input-form').on("submit", function(evt) {
        evt.preventDefault();
        let titleInput = $(".title").val();
        let ratingInput = $(".rating").val();

        if (ratingInput < 0 || ratingInput > 10) {
            alert("Rating must be between 1 and 10!");
            titleCheck(titleInput);
            return;
        }

        if (titleInput.length < 3) {
            alert("Title must be at least 2 characters!")
            return;
        }

        let movieObj = {
            title: titleInput,
            rating: ratingInput
        }

       let movieHTML = makeMovieDataHTML(movieObj);
       console.log(movieHTML, movieObj);


        $('.movie-container').append(movieHTML)
        $('.movie-input-form').trigger("reset");
    });

    $("table").on("click", ".delete-button", function(evt) {
        $(evt.target)
          .closest("tr")
          .remove();
    });

});


const makeMovieDataHTML = (movie) => {
    return `
    <table class="container">
        <tr class ="row">
            <td class="col-4">${movie.title}</td>
            <td class="col-4">${movie.rating}</td>
            <td class="col-4">
                <button class="delete-button btn btn-danger">Delete</button>
            </td>
        </tr>
    </table>
    `
}

function titleCheck(string) {
    if (string.length < 3) {
        alert("Title must be at least 2 characters!")
        return;
    }
}



