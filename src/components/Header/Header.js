import Logo from '../Logo/Logo';
import './Header.css';

import Navigation from './Navigation/Navigation';

const Header = ({isLogin, email}) => {
	return (
		<header className='header'>
			<Logo />
			<Navigation isLogin={isLogin} email={email}/>
		</header>
	);
};

export default Header;
