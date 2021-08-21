import './MoviesCard.css';
import movieImg from '../../images/movie-img.png';

const MoviesCard = ({isSaved}) => {
	return (
		<div className='movies-card'>
			<div className='movies-card__header'>
				<div className='movies-card__discription'>
					<h2 className='movies-card__title'>33 слова о дизайне</h2>
					<p className='movies-card__duration'>1ч 47м</p>
				</div>
				{isSaved ? (
					<button type='button' className='movies-card__button-delete'></button>
				) : (
					<button type='button' className='movies-card__button-choice'></button>
				)}
			</div>
			<img className='movies-card__img' src={movieImg} alt='Кадр из фильма' />
		</div>
	);
};

export default MoviesCard;
