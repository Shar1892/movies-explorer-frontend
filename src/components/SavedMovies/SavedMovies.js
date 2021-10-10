import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
	movies,
	notFound,
	handleDeleteMovie,
	searchSavedMovies,
	handleShortSavedMovies,
	isShortSavedMovie,
}) => {
	return (
		<>
			<SearchForm
				handleShortMovies={handleShortSavedMovies}
				searchSavedMovies={searchSavedMovies}
				isShort={isShortSavedMovie}
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
