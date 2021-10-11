import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({
	movies,
	notFound,
	searchMovies,
	isError,
	handleShortMovies,
	handleSaveMovie,
	handleDeleteMovie,
	isShort,
	isLoading,
}) => {
	return (
		<>
			<SearchForm
				searchMovies={searchMovies}
				isSaved={false}
				handleShortMovies={handleShortMovies}
				isShort={isShort}
			/>
			<MoviesCardList
				isSaved={false}
				movies={movies}
				notFound={notFound}
				isError={isError}
				isLoading={isLoading}
				handleSaveMovie={handleSaveMovie}
				handleDeleteMovie={handleDeleteMovie}
			/>
		</>
	);
};

export default Movies;
