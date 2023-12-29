import 'bootstrap/dist/css/bootstrap.css';
import styles from './ResultList.module.css';
const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;

function ResultList(props) {

    // render dữ liệu người dùng đã tìm kiếm
    const renderResultData = (listMovie) => {
        if (listMovie) {
            return listMovie.map((movie) => {
                return (
                    <div className={`${styles['item']}`} onClick={() => {
                        const movieDetailData = {
                            id: movie.id,
                            title: movie.original_title ? movie.original_title : movie.original_name,
                            overview: movie.overview,
                            vote_average: movie.vote_average,
                            release_date: movie.release_date,
                            backdrop_path: `${BASE_URL_IMAGE}${movie.backdrop_path}`
                        }
                        props.openModal(movieDetailData)
                    }}>
                        <img className={`w-100`} alt={movie.original_title} src={`${BASE_URL_IMAGE}${movie.poster_path}`} />
                    </div>
                )

            })
        }
        return <></>
    }

    return (
        <div className={`px-2 mt-5 mb-3 text-light ${styles['']}`}>
            <h4 className={` ${styles['']}`}>Search Result</h4>
            <div className={` px-4 ${styles['result-list']}`}>
                {renderResultData(props.searchResult)}
            </div>
        </div>
    );
}

export default ResultList;