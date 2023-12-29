import 'bootstrap/dist/css/bootstrap.css';

import { useEffect, useState } from 'react';
import { fetchApi } from '../../services/service-api';

import errorImage from '../../assets/images/errorImage.jpg'
import styles from './Banner.module.css';

const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;

function Banner(props) {

    const [banner, setBanner] = useState({});

    // load dữ liệu từ api (https://api.themoviedb.org/3/discover/tv?api_key=ce36a466544bdfcede27f6fd6b25be87&with_network=123)
    useEffect(() => {
        fetchApi(props.url).then((response) => {
            const data = response.data;
            if (!data) {
                throw new Error(response.message)
            }
            return data.results
        }).then((data) => {
            // random một bộ phim trong mảng từ dữ lieuje trả về
            const randomN = Math.floor(Math.random() * (data.length - 1))
            const banner = data[randomN]

            setBanner(banner)
        }).catch((error) => {
            alert("Something went wrong!")
            console.log(error)
        })
    }, [props.url]);

    return (
        <div id='banner' className={`position-relative ${styles['banner']}`} >
            <img src={
                banner.backdrop_path ? `${BASE_URL_IMAGE}${banner.backdrop_path}` : errorImage
            } alt={banner.name} className={`w-100 h-100 ${styles['image-banner']}`} />
            <div className={` position-absolute ${styles['info']}`}>
                <h1 className={`${styles['movie-name']}`}>{banner.name}</h1>
                <div className={`${styles['movie-actions']}`}>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p className={`${styles['movie-overview']}`}>{banner.overview}</p>
            </div>
        </div>
    );
}

export default Banner;