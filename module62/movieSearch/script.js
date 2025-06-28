import { card } from "./movieCard.js";

// get movies data from the database
async function getMovieData(movieName) {
    try {
        if (localStorage.getItem(movieName)) {
            console.log('Data retrieved from localStorage:', JSON.parse(localStorage.getItem(movieName)));
            return JSON.parse(localStorage.getItem(movieName));
        } else {
          const response = await fetch(`http://www.omdbapi.com/?apikey=2e97b839&s=${movieName}`);
          if (!response.ok) {
               throw new Error('Network response was not ok');
          }
          const movieData = await response.json();
          localStorage.setItem(movieName, JSON.stringify(movieData));
          console.log("Called the api ");
          console.log(movieData);
          return movieData;
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }     
};

// Search the movie with their respective name and append the card
const searchButton = document.getElementById("searchButton");
const mainCards = document.getElementById("mainCards");
const searchBox = document.getElementById("SearchBox");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchMovies();
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchMovies();
  }
});

async function searchMovies() {
  const searchBox = document.getElementById("SearchBox");
  const inputName = searchBox.value.trim();

  if (!inputName) return;

  const movieList = await getMovieData(inputName);

  // clear previous cards
  mainCards.innerHTML = "";

  if (movieList?.Search?.length > 0) {
    movieList.Search.forEach((movie) => card(movie, mainCards));
  } else {
    mainCards.innerHTML = `<p class="text-white">No movies found.</p>`;
  }
};





export { getMovieData };