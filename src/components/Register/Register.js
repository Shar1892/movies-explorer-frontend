import {Link} from 'react-router-dom';

import {useFormWithValidation} from '../../utils/useFormWithValidation';
import './Register.css';
import Logo from '../Logo/Logo';

const Register = ({onRegister, errorMessage, onClear}) => {
	const {values, handleChange, errors, isFormValid} = useFormWithValidation();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onRegister(values.name, values.email, values.password);
		onClear();
	};

	return (
		<main className='register'>
			<div className='register__title-container'>
				<Logo />
				<h1 className='register__title'>Добро пожаловать!</h1>
			</div>
			<form className='register__form' onSubmit={handleSubmit}>
				<div className='register__inputs-container'>
					<div className='register__input-container'>
						<label className='register__input_label'>Имя</label>
						<input
							type='text'
							id='register-name-input'
							className='register__input'
							name='name'
							value={values.name || ''}
							onChange={handleChange}
							minLength='2'
							maxLength='40'
							required
						></input>
						<span className='register__input-error register__name-input-error'>
							{errors.name}
						</span>
					</div>
					<div className='register__input-container'>
						<label className='register__input_label'>E-mail</label>
						<input
							type='email'
							id='register-email-input'
							className='register__input'
							name='email'
							value={values.email || ''}
							onChange={handleChange}
							maxLength='40'
							pattern='[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}'
							required
						></input>
						<span className='register__input-error register__email-input-error'>
							{errors.email}
						</span>
					</div>
					<div className='register__input-container'>
						<label className='register__input_label'>Пароль</label>
						<input
							type='password'
							id='register-password-input'
							className='register__input'
							name='password'
							value={values.password || ''}
							onChange={handleChange}
							minLength='2'
							maxLength='40'
							required
						></input>
						<span className='register__input-error register__password-input-error'>
							{errors.password}
						</span>
					</div>
				</div>
				<span className='register__input-error register__form-error'>
					{errorMessage}
				</span>
				<button
					type='submit'
					className={`register__button register__button_margin_singup ${
						isFormValid ? '' : 'register__button_disabled'
					}`}
				>
					Зарегистрироваться
				</button>
				<div className='register__link-container'>
					<p className='register__link-paragraph'>Уже зарегистрированы?</p>
					<Link to='/signin' className='register__link' onClick={onClear}>
						Войти
					</Link>
				</div>
			</form>
		</main>
	);
};

export default Register;
