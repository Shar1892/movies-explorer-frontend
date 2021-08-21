import './SearchForm.css';
import search__icon from '../../images/search-icon.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
	return (
		<section className='search'>
			<form className='search__form'>
				<div className='search__input-container'>
					<img src={search__icon} alt='Поиск' className='search__icon' />
					<input
						type='text'
						name='search'
						placeholder='Фильм'
						className='search__form-input'
						required
					/>
					<button className='search__form-button' type='submit'>
						Найти
					</button>
				</div>
				<div className='search__сheckbox-container'>
					<FilterCheckbox />
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
