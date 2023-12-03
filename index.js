const moviesData = {
  Search: [
    {
      Title: "The Lego Movie",
      Year: "2014",
      imdbID: "tt1490017",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    },
    {
      Title: "The Simpsons Movie",
      Year: "2007",
      imdbID: "tt0462538",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
      Title: "El Camino: A Breaking Bad Movie",
      Year: "2019",
      imdbID: "tt9243946",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    },
    {
      Title: "Scary Movie",
      Year: "2000",
      imdbID: "tt0175142",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Super Mario Bros. Movie",
      Year: "2023",
      imdbID: "tt6718170",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
    },
    {
      Title: "Bee Movie",
      Year: "2007",
      imdbID: "tt0389790",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Scary Movie 2",
      Year: "2001",
      imdbID: "tt0257106",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      Title: "Scary Movie 3",
      Year: "2003",
      imdbID: "tt0306047",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg",
    },
    {
      Title: "Scary Movie 4",
      Year: "2006",
      imdbID: "tt0362120",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
  ],
};

inputMovie = document.querySelector("#inputMovie");

movieList = document.querySelector("#movieList");

buttonEL = document.querySelector("#buttonEL");

const movieLists = moviesData.Search.map(
  (item) => `
  <div class="col-md-4 mb-4">
    <div class="card h-100" style="width: 18rem;">
      <img  src="${item.Poster}" class="card-img-top_css  card-img-top " alt="...">
      <div class="card-body">
        <h5 class="card-title fw-bold">${item.Title}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item fw-bold">Year: ${item.Year}</li>
        <li class="list-group-item fw-bold">ImdBID: ${item.imdbID}</li>
        <li class="list-group-item fw-bold">Movie Type: ${item.Type}</li>
      </ul>
    </div>
  </div>
`
).join("");
movieList.innerHTML = movieLists;

inputMovie.addEventListener("input", () => {
  const inputValue = inputMovie.value.toLowerCase(); // The letters of the input's value are lowercase.
  console.log("input:", inputValue);
  const filteredMovies = moviesData.Search.filter((el) => {
    // fThe filter function returns the desired values.

    let movieTitle = el.Title.toLowerCase(); // elementin Title daki ismin hariflerini kuculdur
    console.log("el:", el);
    console.log("movvie-title", movieTitle);
    console.log("movie-funfc:", movieTitle.includes(inputValue)); // This checks whether the input value is inside the movie; it is an array and string method
    if (movieTitle.includes(inputValue)) {
      return el;
    }
  });
  console.log(filteredMovies); // This is an array, and it contains the desired movie names.

  movieList.innerHTML = filteredMovies
    .map(
      (item) => `
                              <div class="col-md-4 mb-4">
                                <div class="card h-100" style="width: 18rem;">
                                  <img src="${item.Poster}" class="card-img-top_css  card-img-top" alt="...">
                                  <div class="card-body">
                                    <h5 class="card-title fw-bold">${item.Title}</h5>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item fw-bold">Year: ${item.Year}</li>
                                    <li class="list-group-item fw-bold">ImdBID: ${item.imdbID}</li>
                                    <li class="list-group-item fw-bold">Movie Type: ${item.Type}</li>
                                  </ul>
                                </div>
                              </div>
                            `
    )
    .join("");
});

buttonEL.addEventListener("click", () => {
  inputMovie.value = "";
  movieList.innerHTML = moviesData.Search.map(
    (item) => `
                            <div class="col-md-4 mb-4">
                              <div class="card h-100" style="width: 18rem;">
                                <img src="${item.Poster}" class="card-img-top_css  card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title fw-bold">${item.Title}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item fw-bold">Year: ${item.Year}</li>
                                  <li class="list-group-item fw-bold">ImdBID: ${item.imdbID}</li>
                                  <li class="list-group-item fw-bold">Movie Type: ${item.Type}</li>
                                </ul>
                              </div>
                            </div>
                          `
  ).join("");
});
