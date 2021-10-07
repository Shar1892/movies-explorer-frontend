import {useState} from 'react';

import './SearchForm.css';
import search__icon from '../../images/search-icon.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = ({
	searchMovies,
	searchSavedMovies,
	isSaved,
	handleShortMovies,
	isShort,
}) => {
	const [currentSearchQuery, setCurrentSearchQuery] = useState('');

	const handleInputChange = (evt) => {
		setCurrentSearchQuery(evt.target.value);
	};

	const handleSearchMovies = (evt) => {
		evt.preventDefault();

		searchMovies(currentSearchQuery);
	};

	const handleSearchSavedMovies = (evt) => {
		evt.preventDefault();

		searchSavedMovies(currentSearchQuery);
	};

	return (
		<section className='search'>
			<form
				className='search__form'
				onSubmit={isSaved ? handleSearchSavedMovies : handleSearchMovies}
			>
				<div className='search__input-container'>
					<img src={search__icon} alt='Поиск' className='search__icon' />
					<input
						type='text'
						name='search'
						placeholder='Фильм'
						className='search__form-input'
						onChange={handleInputChange}
						value={currentSearchQuery}
						required
					/>
					<button className='search__form-button' type='submit'>
						Найти
					</button>
				</div>
				<div className='search__сheckbox-container'>
					<FilterCheckbox onChange={handleShortMovies} isShort={isShort} />
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
