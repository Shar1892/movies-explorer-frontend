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
	const [isSearchValid, setIsSearchValid] = useState(true);

	const checkFilledSearch = (search) => {
		if (search) {
			return true;
		} else {
			return false;
		}
	};

	const handleInputChange = (evt) => {
		setCurrentSearchQuery(evt.target.value);
	};

	const handleSearchMovies = (evt) => {
		evt.preventDefault();

		if (checkFilledSearch(currentSearchQuery)) {
			searchMovies(currentSearchQuery);
			setIsSearchValid(true);
		} else {
			setIsSearchValid(false);
		}
	};

	const handleSearchSavedMovies = (evt) => {
		evt.preventDefault();

		if (checkFilledSearch(currentSearchQuery)) {
			searchSavedMovies(currentSearchQuery);
			setIsSearchValid(true);
		} else {
			setIsSearchValid(false);
		}
	};

	return (
		<section className='search'>
			<form
				className='search__form'
				onSubmit={isSaved ? handleSearchSavedMovies : handleSearchMovies}
				noValidate
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
					/>
					<button className='search__form-button' type='submit'>
						Найти
					</button>
				</div>
				<span
					className={`search__error-message ${
						isSearchValid ? 'search__error-message_hidden' : ''
					}`}
				>
					Нужно ввести ключевое слово
				</span>
				<div className='search__сheckbox-container'>
					<FilterCheckbox onChange={handleShortMovies} isShort={isShort} />
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
