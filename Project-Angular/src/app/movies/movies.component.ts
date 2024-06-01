import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    show(movies);
  }

}
const movies = [
  {
      id: 1,
      title: "The Shawshank Redemption",
      actors: ["Tim Robbins", "Morgan Freeman"],
      releaseDate: "1994-09-23",
      synopsis: "Dos hombres encuentran la redención en una prisión de máxima seguridad.",
      poster: "https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
      rating: "9.3"
  },
  {
      id: 2,
      title: "The Godfather",
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      releaseDate: "1972-03-24",
      synopsis: "El patriarca de una familia mafiosa transfiere el control de su imperio a su hijo más joven.",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      rating: "9.2"
  },
  {
      id: 3,
      title: "Pulp Fiction",
      actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
      releaseDate: "1994-10-14",
      synopsis: "Varias historias entrelazadas sobre el crimen y la redención en Los Ángeles.",
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: "8.9"
  },
  {
      id: 4,
      title: "The Dark Knight",
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      releaseDate: "2008-07-18",
      synopsis: "Batman se enfrenta al Joker en una batalla por la justicia en Gotham City.",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: "9.0"
  },
  {
      id: 5,
      title: "Fight Club",
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      releaseDate: "1999-10-15",
      synopsis: "Un hombre descontento forma un club de lucha clandestino como forma de escape.",
      poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: "8.8"
  },
  {
      id: 6,
      title: "Inception",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      releaseDate: "2010-07-16",
      synopsis: "Un ladrón de sueños se embarca en una misión peligrosa para implantar una idea en la mente de alguien.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: "8.7"
  },
  {
      id: 7,
      title: "The Matrix",
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      releaseDate: "1999-03-31",
      synopsis: "Un hacker descubre que la realidad en la que vive es una simulación de computadora.",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: "8.7"
  },
  {
      id: 8,
      title: "Forrest Gump",
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      releaseDate: "1994-07-06",
      synopsis: "Un hombre con discapacidad intelectual vive una vida extraordinaria a través de eventos históricos.",
      poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: "8.8"
  },
  {
      id: 9,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      releaseDate: "2001-12-19",
      synopsis: "Un grupo de aventureros se embarca en un viaje para destruir un anillo mágico.",
      poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      rating: "8.8"
  },
  {
      id: 10,
      title: "The Avengers",
      actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      releaseDate: "2012-05-04",
      synopsis: "Superhéroes se unen para proteger la Tierra de una amenaza extraterrestre.",
      poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: "8.0"
  }
];

function show(movies) {
  const movieList = document.getElementById("movie_list");
  movieList.innerHTML = "";

  if (movies.length === 0) {
      movieList.innerHTML = "<p>No se encontraron resultados</p>"; 
  }
  else {
      for (let i = 0; i < movies.length; i += 3){
          let slide = '<div class="carousel-item';
          if(movies[i].id === 1) {
              slide += ' active';
          }
          slide += '">';
          slide += `<div class="card-group">`
          movies.slice(i, i + 3).forEach(movies => {
           const movieCard = `   
           <div class=" card1 card more-style">
           <img src="${movies.poster}" class="card-img-top movies" alt="...">
           <div class="card-body more-style">
             <h5 class="card-title">${movies.title}</h5>
             <p class="card-text">Año: ${movies.releaseDate}.</p>
             <p class="card-text">Actores: ${movies.actors}</p>
             <span class="badge text-bg-warning">${movies.rating}</span>
             <button class="btn information-bottom btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${movies.id}" aria-expanded="false" aria-controls="collapseExample">
              Información
              </button>
              </p>
              <div class="collapse" id="collapse${movies.id}">
          <div class="card card-body">
          ${movies.synopsis}
          </div>
          </div>

           </div>
         </div>
         `;
         slide += movieCard;
      });
      slide += `</div>
      </div>`;
      movieList.innerHTML += slide;
      }
  }
}



