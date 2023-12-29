const fetchAllMovie = async () => {
    let movieList = [];
    try {
        const response = await fetch('https://movie-7d02e-default-rtdb.firebaseio.com/movie.json');
        if (response.ok) {
            const movieData = await response.json();
            for (const key in movieData) {
                const movie = {
                    id: key,
                    title: movieData[key].title,
                    openingText: movieData[key].openingText,
                    releaseDate: movieData[key].releaseDate,
                }
                movieList.push(movie);
            }
            return {
                data: movieList,
                message: ''
            }

        } else {
            return {
                data: null,
                message: 'Something went wrong!'
            }
        }
    } catch (error) {
        return {
            data: null,
            message: 'Something went wrong!',
            error: error.message,
        }
    }
}


const createMovie = async (movie) => {
    try {
        const response = await fetch('https://movie-7d02e-default-rtdb.firebaseio.com/movie.json', {
            method: 'POST',
            body: JSON.stringify({
                title: movie.title,
                openingText: movie.openingText,
                releaseDate: movie.releaseDate
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        return {
            status: response.status,
            data: data,
            message: 'ok'
        }
    } catch (error) {
        return {
            status: 400,
            data: null,
            message: 'failed'
        }
    }
}

export {
    fetchAllMovie,
    createMovie
}