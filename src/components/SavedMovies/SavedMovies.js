import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
	return (
		<>
			<SearchForm />
			<MoviesCardList isSaved={true} />
		</>
	);
};

export default SavedMovies;
