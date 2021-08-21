import {Link} from 'react-router-dom';

import logo from '../../images/logo.svg';

const Logo = () => {
	return (
		<Link to='/'>
			<img src={logo} alt='Лого' />
		</Link>
	);
};

export default Logo;
