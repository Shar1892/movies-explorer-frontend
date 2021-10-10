import {useState, useEffect} from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({
	isSaved,
	movies,
	notFound,
	isLoading,
	isError,
	handleSaveMovie,
	handleDeleteMovie,
}) => {
	const windowWidth = window.innerWidth;

	const [startCardsValue, setStartCardsValue] = useState(() => {
		if (windowWidth < 768) {
			return 5;
		} else if (windowWidth < 1280) {
			return 8;
		} else {
			return 12;
		}
	});

	const [addCardsValue, setAddCardsValue] = useState(() => {
		if (windowWidth < 1280) {
			return 2;
		} else {
			return 3;
		}
	});

	const viewCards = movies.slice(0, startCardsValue);

	const handleChangeWindowWigth = () => {
		if (windowWidth < 768) {
			setStartCardsValue(5);
			setAddCardsValue(2);
		} else if (windowWidth < 1280) {
			setStartCardsValue(8);
			setAddCardsValue(2);
		} else {
			setStartCardsValue(12);
			setAddCardsValue(3);
		}
	};

	const handleAddCards = () => {
		setStartCardsValue((viewCards) => viewCards + addCardsValue);
	};

	useEffect(() => {
		window.addEventListener('resize', handleChangeWindowWigth);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{isLoading && <Preloader />}

			<p
				className={`movies-card-list__message ${
					isError ? '' : 'movies-card-list__message_hidden'
				}`}
			>
				Во время запроса произошла ошибка. Возможно, проблема с соединением или
				сервер недоступен. Подождите немного и попробуйте ещё раз
			</p>

			<p
				className={`movies-card-list__message ${
					!isSaved && !movies.length && !notFound && !isLoading
						? ''
						: 'movies-card-list__message_hidden'
				}`}
			>
				Начните поиск
			</p>

			<p
				className={`movies-card-list__message ${
					JSON.parse(localStorage.getItem('savedMovies')).length &&
					notFound &&
					!isLoading
						? ''
						: 'movies-card-list__message_hidden'
				}`}
			>
				Ничего не нашлось
			</p>

			<p
				className={`movies-card-list__message ${
					isSaved && !JSON.parse(localStorage.getItem('savedMovies')).length
						? ''
						: 'movies-card-list__message_hidden'
				}`}
			>
				Нет избранных фильмов
			</p>

			<section className='movies-card-list'>
				{viewCards.map((item, i) => (
					<MoviesCard
						isSaved={isSaved}
						movie={item}
						key={item.id}
						handleSaveMovie={handleSaveMovie}
						handleDeleteMovie={handleDeleteMovie}
					/>
				))}
			</section>
			{!isSaved && (
				<button
					className={`movies-card-list__more ${
						movies.length && movies.length !== viewCards.length
							? ''
							: 'movies-card-list__more_hidden'
					}`}
					onClick={handleAddCards}
					type='button'
				>
					Ещё
				</button>
			)}
		</>
	);
};

export default MoviesCardList;
