import './App.css';

import {Route, Switch} from 'react-router-dom';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotResult from '../NotResult/NotResult';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/signup'>
					<Register />
				</Route>
				<Route path='/signin'>
					<Login />
				</Route>
				<Route path='/profile'>
					<Header isLogin={true} />
					<Profile />
				</Route>
				<Route path='/movies'>
					<Header isLogin={true} />
					<Movies />
					<Footer />
				</Route>
				<Route path='/saved-movies'>
					<Header isLogin={true} />
					<SavedMovies />
					<Footer />
				</Route>
				<Route exact path='/'>
					<Header isLogin={true} />
					<Main />
					<Footer />
				</Route>
				<Route path='*'>
					<NotResult />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
