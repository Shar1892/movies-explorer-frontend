import {useState, useEffect, useCallback} from 'react';

import './MoviesCard.css';
import movieImg from '../../images/movie-img.png';

const MoviesCard = ({isSaved, movie, handleSaveMovie, handleDeleteMovie}) => {
	const [isNewSaved, setIsNewSaved] = useState(false);
	const movieProfile = {
		country: movie.country || 'Не указано',
		director: movie.director || 'Не указано',
		duration: movie.duration,
		year: movie.year || 'Не указано',
		description: movie.description || 'Не указано',
		image: `${
			movie.image === null
				? `${movieImg}`
				: `https://api.nomoreparties.co${movie.image?.url}`
		}`,
		trailer: movie?.trailerLink,
		nameRU: movie.nameRU || 'Не указано',
		nameEN: movie.nameEN || 'Не указано',
		thumbnail: `https://api.nomoreparties.co${movie.image?.formats?.thumbnail?.url}`,
		movieId: movie.id,
	};

	const transformedMovieDuration = `${Math.trunc(
		movieProfile.duration / 60
	)}ч ${movieProfile.duration % 60}м`;

	const isLikedMovie = useCallback(() => {
		if (localStorage.getItem('savedMovies')) {
			const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
			if (savedMovies.some((item) => item.nameRU === movie.nameRU)) {
				setIsNewSaved(true);
			}
		}
	}, [movie.nameRU]);

	const saveMovie = () => {
		handleSaveMovie(movieProfile);
		setIsNewSaved(true);
	};

	const deleteMovie = () => {
		setIsNewSaved(false);
		handleDeleteMovie(movie._id);
	};

	const dislikeMovie = () => {
		if (localStorage.getItem('savedMovies')) {
			const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
			const currentMovie = savedMovies.find(
				(item) => item.nameRU === movie.nameRU
			);
			handleDeleteMovie(currentMovie._id);
			setIsNewSaved(false);
		}
	};

	useEffect(() => {
		isLikedMovie();
	}, [isLikedMovie]);

	return (
		<div className='movies-card'>
			<div className='movies-card__header'>
				<div className='movies-card__discription'>
					<h2 className='movies-card__title'>{movieProfile.nameRU}</h2>
					<p className='movies-card__duration'>{transformedMovieDuration}</p>
				</div>
				{isSaved ? (
					<button
						type='button'
						className='movies-card__button-delete'
						onClick={deleteMovie}
					></button>
				) : (
					<button
						type='button'
						className={`movies-card__button-choice ${
							isNewSaved ? 'movies-card__button-choice_active' : ''
						}`}
						onClick={isNewSaved ? dislikeMovie : saveMovie}
					></button>
				)}
			</div>
			<a
				href={isSaved ? movie.trailer : movie.trailerLink}
				target='_blank'
				rel='noreferrer'
			>
				<img
					className='movies-card__img'
					src={isSaved ? movie.image : movieProfile.image}
					alt='Кадр из фильма'
				/>
			</a>
		</div>
	);
};

export default MoviesCard;
