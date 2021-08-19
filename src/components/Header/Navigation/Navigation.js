import {Link} from 'react-router-dom';

import icon from '../../../images/icon-main.svg';

import './Navigation.css';

const Navigation = ({isLogin}) => {
	const isOpen = false;

	return (
		<>
			{isLogin ? (
				<div className='navLogin'>
					<button type='button' className='navLogin__button' />
					<nav className='navLogin__menu'>
						<Link to='/movies' className='navLogin__link'>
							Фильмы
						</Link>
						<Link to='/saved-movies' className='navLogin__link'>
							Сохранённые фильмы
						</Link>
						<Link to='/profile' className='navLogin__profile-link'>
							<h2 className='navLogin__email'>email</h2>
							<div className='navLogin__icon-container'>
								<img
									src={icon}
									className='navLogin__icon'
									alt='Иконка аккаунта'
								/>
							</div>
						</Link>
					</nav>
					<div
						className={`navLogin__menu-overlay ${
							isOpen && 'navLogin__menu-overlay_open'
						}`}
					>
						<div className='navLogin__menu-window'>
							<button type='button' className='navLogin__menu-close-button' />
							<nav className='navLogin__menu-mobile'>
								<div className='navLogin__menu-container'>
									<Link to='/' className='navLogin__mobile-link'>
										Главная
									</Link>
									<Link to='/movies' className='navLogin__mobile-link'>
										Фильмы
									</Link>
									<Link to='/saved-movies' className='navLogin__mobile-link'>
										Сохранённые фильмы
									</Link>
								</div>
								<Link to='/profile' className='navLogin__profile-link'>
									<h2 className='navLogin__email'>email</h2>
									<img
										src={icon}
										className='navLogin__icon'
										alt='Иконка аккаунта'
									/>
								</Link>
							</nav>
						</div>
					</div>
				</div>
			) : (
				<div className='navGuest'>
					<nav className='navGuest__menu'>
						<Link to='/signup' className='navGuest__link'>
							Регистрация
						</Link>
						<Link to='/signin' className='navGuest__link-signin'>
							<p className='navGuest__link'>Войти</p>
						</Link>
					</nav>
				</div>
			)}
		</>
	);
};

export default Navigation;
