import './FilterCheckbox.css';

const FilterCheckbox = () => {
	return (
		<label className='filter-checkbox'>
			<input className='filter-checkbox__input' type='checkbox' />
			<span className='filter-checkbox__visible-input' />
			<p className='filter-checkbox__discription'>Короткометражки</p>
		</label>
	);
};

export default FilterCheckbox;
