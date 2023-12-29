import Movie from "../Movie/Movie";
import styles from './MoviesList.module.css';

function MovieList({ movies }) {

    console.log(movies)

    const renderMovies = (movies) => {
        return movies.map((movie) => {
            return (
                <Movie movie={movie} />
            )
        })
    };

    return (
        <div className={`${styles['movies-list']}`}>
            {renderMovies(movies)}
        </div>
    );
}

export default MovieList;