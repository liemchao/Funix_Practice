import React, { useMemo } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

function Browse() {

	// thuyết lập url api sử dụng memo để tránh việc component tải lại
	const movieListOriginal = useMemo(() => `${BASE_URL}${requests.fetchNetflixOriginals}`, [])
	const movieListTrending = useMemo(() => `${BASE_URL}${requests.fetchTrending}`, [])
	const movieListTopRated = useMemo(() => `${BASE_URL}${requests.fetchTopRated}`, [])
	const movieListActionMovies = useMemo(() => `${BASE_URL}${requests.fetchActionMovies}`, [])
	const movieListComedyMovies = useMemo(() => `${BASE_URL}${requests.fetchComedyMovies}`, [])
	const movieListHorrorMovies = useMemo(() => `${BASE_URL}${requests.fetchHorrorMovies}`, [])
	const movieListRomanceMovies = useMemo(() => `${BASE_URL}${requests.fetchRomanceMovies}`, [])
	const movieListDocumentaries = useMemo(() => `${BASE_URL}${requests.fetchDocumentaries}`, [])

	return (
		<div className="app">
			<Navbar />
			<Banner url={`${BASE_URL}${requests.fetchNetflixOriginals}`} />
			<div>
				<MovieList type_path='poster_path' isClick={false} url={movieListOriginal} />
				<MovieList title="Xu hướng" type_path="backdrop_path" isClick={true} url={movieListTrending} />
				<MovieList title="Xếp hạng cao" type_path="backdrop_path" isClick={true} url={movieListTopRated} />
				<MovieList title="Hành động" type_path="backdrop_path" isClick={true} url={movieListActionMovies} />
				<MovieList title="Hài" type_path="backdrop_path" isClick={true} url={movieListComedyMovies} />
				<MovieList title="Kinh dị" type_path="backdrop_path" isClick={true} url={movieListHorrorMovies} />
				<MovieList title="Lãng mạn" type_path="backdrop_path" isClick={true} url={movieListRomanceMovies} />
				<MovieList title="Tài liệu" type_path="backdrop_path" isClick={true} url={movieListDocumentaries} />
			</div>
		</div>
	);

}

export default Browse;

