import styles from './Movie.module.css';
function Movie({ movie }) {
    return (
        <div className={`${styles['movie']}`}>
            <h2>{movie.title}</h2>
            <h3>{movie.openingText}</h3>
            {movie.releaseDate}
        </div>
    );
}

export default Movie;