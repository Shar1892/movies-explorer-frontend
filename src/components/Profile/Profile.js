import {useContext, useEffect} from 'react';

import './Profile.css';
import {useFormWithValidation} from '../../utils/useFormWithValidation';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

const Profile = ({onSignOut, onUpdateUser, errorMessage}) => {
	const {values, setValues, handleChange, errors, isFormValid} =
		useFormWithValidation();

	const currentUser = useContext(CurrentUserContext);

	useEffect(() => {
		setValues(currentUser);
	}, [currentUser, setValues]);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		onUpdateUser(values.name, values.email);
	};

	return (
		<main className='profile'>
			<div className='profile__form-container'>
				<h1 className='profile__title'>Привет, {currentUser.name}!</h1>
				<form className='profile__form' onSubmit={handleSubmit}>
					<div className='profile__form-elements-container'>
						<div className='profile__form-element'>
							<label className='profile__input_label'>Имя</label>
							<div className='profile__input-container'>
								<input
									type='text'
									id='profile-name-input'
									className='profile__input'
									name='name'
									value={values.name || ''}
									onChange={handleChange}
									minLength='2'
									maxLength='40'
									required
								></input>
								<span className='profile__input-error profile__name-input-error'>
									{errors.name}
								</span>
							</div>
						</div>
						<div className='profile__form-element'>
							<label className='profile__input_label'>Почта</label>
							<div className='profile__input-container'>
								<input
									type='email'
									id='profile-email-input'
									className='profile__input'
									name='email'
									value={values.email || ''}
									onChange={handleChange}
									maxLength='40'
									required
								></input>
								<span className='profile__input-error profile__email-input-error'>
									{errors.email}
								</span>
							</div>
						</div>
					</div>
					<span className='profile__input-error profile__form-error'>
						{errorMessage}
					</span>
					<div className='profile__menu'>
						<button
							type='submit'
							className={`profile__button profile__button_type_simple ${
								isFormValid ? '' : 'profile__button_type_disabled'
							}`}
						>
							Редактировать
						</button>
						<button
							type='button'
							className='profile__button profile__button_type_exit'
							onClick={onSignOut}
						>
							Выйти из аккаунта
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Profile;
