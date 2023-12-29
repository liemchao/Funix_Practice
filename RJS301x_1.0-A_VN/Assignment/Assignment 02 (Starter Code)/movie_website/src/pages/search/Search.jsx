import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import { fetchApi } from '../../services/service-api';

import Navbar from '../../components/Navbar/Navbar';
import SearchForm from '../../components/SearchForm/SearchForm';
import ResultList from '../../components/ResultList/ResultList';
import PopupMovieDetail from '../../components/PopupMovieDetail/PopupMovieDetail';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import styles from './Search.module.css';
import CloseXIcon from '../../assets/icons/CloseXIcon';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchResult, setSearchResult] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [movie, setMovie] = useState(null);

	// thiết lập sự kiện search cho nút search
	const searchAction = () => {
		if (searchValue.trim()) {
			fetchApi(`${BASE_URL}/search/movie?query=${searchValue}&api_key=${API_KEY}&language=en-US`).then((response) => {
				const data = response.data;
				if (!data) {
					throw new Error(response.message)
				}
				return data.results
			}).then((data) => {
				setSearchResult(data)
			}).catch((error) => {
				console.log(error)
			})
		}
	}

	// open modal movie detail
	const openModal = (movie) => {
		setMovie(movie)
		setIsOpen(true);
	}

	// close modal movie detail
	const closeModal = () => {
		setIsOpen(false);
	}

	return (
		<>
			<div className={`position-relative ${styles['search']}`}>
				<Navbar />
				<SearchForm searchValue={searchValue} setSearchValue={setSearchValue} searchAction={searchAction} />
				{
					searchResult && searchResult.length !== 0 ?
						<ResultList setMovie={setMovie} searchResult={searchResult} openModal={openModal} />
						: <></>
				}

			</div>
			<PopupMovieDetail>
				<div className={`${isOpen ? 'd-flex' : 'd-none'}  justify-content-center pt-5 ${styles['popup']}`}>
					<div className={`${styles['movie-detail-popup']} flex-column`}>
						<div onClick={closeModal} className=" w-100  d-flex justify-content-end">
							<i className={`${styles['close-icon']}`}>
								<CloseXIcon />
							</i>
						</div>
						<MovieDetail movie={movie} />
					</div>
				</div>
			</PopupMovieDetail>
		</>
	);
};

export default Search;
