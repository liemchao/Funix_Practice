import 'bootstrap/dist/css/bootstrap.css';
import styles from './MovieDetail.module.css';
import YouTube from 'react-youtube';

import { useEffect, useState } from "react";
import { fetchApi } from '../../services/service-api';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const opts = {
    height: '400',
    width: '100%',
    playerVars: {
        autoplay: 0,
    },
}

function MovieDetail(props) {

    const [movieDetailData, setMovieDetailData] = useState(null);

    // lọc ra những object có site = Youtube và type = Trailer hoặc Teaser
    const getYouTubeVideo = (data) => {
        let video = null;
        video = data.find((result) => {
            return result.site === "YouTube" && result.type === "Trailer"
        })
        if (!video) {
            video = data.find((result) => {
                return result.site === "YouTube" && result.type === "Teaser"
            })
        }
        return video;
    }

    // fetch detail movie from  api (https://api.themoviedb.org/{id}/movie/872585/videos?api_key=ce36a466544bdfcede27f6fd6b25be87)
    useEffect(() => {
        if (props.movie) {
            fetchApi(`${BASE_URL}/movie/${props.movie.id}/videos?api_key=${API_KEY}`).then((response) => {
                const data = response.data;
                return data;
            }).then((data) => {
                if (data) {
                    const result = getYouTubeVideo(data.results);
                    const movieData = {
                        id: data.id,
                        title: props.movie.title,
                        overview: props.movie.overview,
                        backdrop_path: props.movie.backdrop_path,
                        release_date: props.movie.release_date,
                        vote_average: props.movie.vote_average,
                        key: result ? result.key : result,
                    }
                    setMovieDetailData(movieData)
                } else {
                    const movieData = {
                        title: props.movie.title,
                        overview: props.movie.overview,
                        backdrop_path: props.movie.backdrop_path,
                        release_date: props.movie.release_date,
                        vote_average: props.movie.vote_average,
                        key: null
                    }
                    setMovieDetailData(movieData)
                }
            }).catch((error) => {
                console.log(error)
                alert('Something went wrong');
            })
        }
    }, [props.movie]);

    return (
        <>
            {movieDetailData ?
                <div className={`mt-2 ${styles['movie-detail']}`}>
                    <div className={`d-flex px-3 `}>
                        <div className={`pe-4 ps-3 ${styles['movie-info']}`}>
                            <h1>{movieDetailData.title}</h1>
                            <div className={`mb-3 ${styles['create-rating']}`}>
                                <p className={`${styles['release-date']}`}>Release Date: {movieDetailData.release_date}</p>
                                <p className={`${styles['voting']}`}>Vote: {movieDetailData.vote_average}/10</p>
                            </div>
                            <p>
                                {movieDetailData.overview}
                            </p>
                        </div>
                        <div className={`${styles['video']}`}>
                            {
                                movieDetailData.key
                                    ? <YouTube
                                        videoId={movieDetailData.key}
                                        opts={opts}
                                    /> :
                                    <img alt={movieDetailData.title} className={`w-100`} src={movieDetailData.backdrop_path} />}
                        </div>
                    </div>
                </div>
                : <></>
            }

        </>
    );
}

export default MovieDetail;