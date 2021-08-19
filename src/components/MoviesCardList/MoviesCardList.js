import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({isSaved}) => {
	return (
		<section className='movies-card-list'>
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
			<MoviesCard isSaved={isSaved} />
		</section>
	);
};

export default MoviesCardList;
