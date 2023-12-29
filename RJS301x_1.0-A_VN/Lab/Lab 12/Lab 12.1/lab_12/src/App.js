import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';
import MovieList from './components/MoviesList/MoviesList';
import { createMovie, fetchAllMovie } from './service/api/movie-api';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMovie = () => {
    fetchAllMovie().then((response) => {
      setMovies(response.data)
    })
  }

  const createAMovie = (movie) => {
    console.log(movie)
    createMovie(movie)
      .then(() => {
        alert("Add successfully!")
      }).catch((error) => {
        console.log(error)
      })
  }


  return (
    <>
      <section>
        <AddMovie createAMovie={createAMovie}>
          <button type='submit'>Add Movie</button>
        </AddMovie>
      </section>
      <section>
        <button onClick={fetchMovie}>Fetch Movie</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </>
  );
}

export default App;
