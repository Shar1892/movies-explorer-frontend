import Logo from '../Logo/Logo';
import './Header.css';

import Navigation from './Navigation/Navigation';

const Header = ({isLogin}) => {
	return (
		<header className='header'>
			<Logo />
			<Navigation isLogin={isLogin} />
		</header>
	);
};

export default Header;
