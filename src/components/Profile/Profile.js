import './Profile.css';

const Profile = () => {
	const user = 'Сергей';

	return (
		<main className='profile'>
			<div className='profile__form-container'>
				<h1 className='profile__title'>Привет, {user}!</h1>
				<form className='profile__form' name='profile-form'>
					<div className='profile__form-element'>
						<label className='profile__input_label'>Имя</label>
						<div className='profile__input-container'>
							<input
								type='text'
								id='profile-name-input'
								className='profile__input'
								name='name'
								minLength='2'
								maxLength='40'
								required
							></input>
							<span className='profile__input-error profile__name-input-error'></span>
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
								maxLength='40'
								required
							></input>
							<span className='profile__input-error profile__email-input-error'>
								Error
							</span>
						</div>
					</div>
				</form>
			</div>
			<div className='profile__menu'>
				<button
					type='button'
					className='profile__button profile__button_type_simple'
				>
					Редактировать
				</button>
				<button
					type='button'
					className='profile__button profile__button_type_exit'
				>
					Выйти из аккаунта
				</button>
			</div>
		</main>
	);
};

export default Profile;
