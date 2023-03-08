const userSearch = document.querySelector('input');
const searchBtn = document.querySelector('button');
const resultContainer = document.querySelector('.result-container');

// t in this api meanis movie title
const getMovie = () => {
    fetch(`https://omdbapi.com/?t=${userSearch.value}&apiKey=${key}`)
    .then(response => response.json())
    .then(data => {
        resultContainer.innerHTML = `

            <img src=${data.Poster}>

            <p>Title: <span>${data.Title}</span></p>

            <p>Year:<span>${data.Year}</span></p>

            <p>Actors: <span>${data.Actors}</span></p>

            <p>Genre: <span>${data.Genre}</span></p>

            <p>Rating: <span>${data.imdbRating}</span></p>

        `
    })
};

searchBtn.addEventListener('click', getMovie);