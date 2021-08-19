import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
	return (
		<section className='movies'>
			<SearchForm />
			<MoviesCardList isSaved={false} />
			<button className='movies__more' type='button'>
				Ещё
			</button>
		</section>
	);
};

export default Movies;
