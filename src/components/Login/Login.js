import {Link} from 'react-router-dom';

import '../Register/Register.css';
import Logo from '../Logo/Logo';

const Login = () => {
	return (
		<main className='register'>
			<div className='register__title-container'>
				<Logo />
				<h1 className='register__title'>Рады видеть!</h1>
			</div>
			<form className='register__form'>
				<div className='register__inputs-container'>
					<div className='register__input-container'>
						<label className='register__input_label'>E-mail</label>
						<input
							type='email'
							id='register-email-input'
							className='register__input'
							name='email'
							maxLength='40'
							required
						></input>
						<span className='register__input-error register__email-input-error'></span>
					</div>
					<div className='register__input-container'>
						<label className='register__input_label'>Пароль</label>
						<input
							type='password'
							id='register-password-input'
							className='register__input'
							name='password'
							minLength='2'
							maxLength='40'
							required
						></input>
						<span className='register__input-error register__password-input-error'></span>
					</div>
				</div>
				<button
					type='submit'
					className='register__button register__button_margin_singin'
				>
					Войти
				</button>
			</form>
			<div className='register__link-container'>
				<p className='register__link-paragraph'>Ещё не зарегистрированы?</p>
				<Link to='/signup' className='register__link'>
					Регистрация
				</Link>
			</div>
		</main>
	);
};

export default Login;
