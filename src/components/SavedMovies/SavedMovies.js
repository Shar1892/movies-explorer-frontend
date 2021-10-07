import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
	movies,
	notFound,
	handleDeleteMovie,
	handleShortMovies,
	searchSavedMovies,
	isShort,
}) => {
	return (
		<>
			<SearchForm
				handleShortMovies={handleShortMovies}
				searchSavedMovies={searchSavedMovies}
				isShort={isShort}
				isSaved={true}
			/>
			<MoviesCardList
				isSaved={true}
				movies={movies}
				notFound={notFound}
				handleDeleteMovie={handleDeleteMovie}
			/>
		</>
	);
};

export default SavedMovies;
