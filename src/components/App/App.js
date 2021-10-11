/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';

import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotResult from '../NotResult/NotResult';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
	const [currentUser, setCurrentUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const [movies, setMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [isShort, setIsShort] = useState(false);
	const [isShortSavedMovie, setIsShortSavedMovie] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [isError, setIsError] = useState(false);
	const [isSuccessfulChange, setIsSuccessfulChange] = useState(false);

	const [editProfileMessage, setEditProfileMessage] = useState('');
	const [registerErrorMessage, setRegisterErrorMessage] = useState('');
	const [loginErrorMessage, setLoginErrorMessage] = useState('');

	const history = useHistory();

	const checkToken = () => {
		if (localStorage.getItem('jwt')) {
			Promise.all([mainApi.getUser(), mainApi.getSavedMovies()])
				.then(([userData, allSavedMovies]) => {
					setLoggedIn(true);
					setCurrentUser({...userData});
					history.push('/movies');
					setEmail(userData.email);

					const currentUserSevedMovies = allSavedMovies.filter((movie) => {
						return movie.owner === userData._id;
					});
					setSavedMovies(currentUserSevedMovies);
					localStorage.setItem(
						'savedMovies',
						JSON.stringify(currentUserSevedMovies)
					);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	useEffect(() => {
		checkToken();
	}, []);

	const onLogin = (email, password) => {
		mainApi
			.authorize(email, password)
			.then((data) => {
				if (data) {
					checkToken();
					history.push('/movies');
				}
			})
			.catch((err) => {
				console.log(err);
				if (err === 400) {
					setRegisterErrorMessage('Указаны некоректные данные пользователя.');
				} else if (err === 401) {
					setRegisterErrorMessage('Пользователь не найден.');
				} else {
					setRegisterErrorMessage('Что-то пошло не так.');
				}
			});
	};

	const onRegister = (name, email, password) => {
		mainApi
			.register(name, email, password)
			.then((data) => {
				if (data) {
					onLogin(email, password);
					history.push('/movies');
				}
			})
			.catch((err) => {
				console.log(err);
				if (err === 400) {
					setRegisterErrorMessage('Указаны некоректные данные пользователя.');
				} else if (err === 409) {
					setRegisterErrorMessage('Такой пользователь уже существует.');
				} else {
					setRegisterErrorMessage('Что-то пошло не так.');
				}
			});
	};

	const handleUpdateUser = (name, email) => {
		mainApi
			.setUserData(name, email)
			.then((data) => {
				setCurrentUser({...data});
				setEditProfileMessage('Профиль обновлен.');
				setIsSuccessfulChange(true);
			})
			.catch((err) => {
				console.log(err);
				setIsSuccessfulChange(false);
				if (err === 400) {
					setEditProfileMessage('Указаны некоректные данные пользователя.');
				} else {
					setEditProfileMessage('Что-то пошло не так.');
				}
			});
	};

	const clearAllErrorMessages = () => {
		setRegisterErrorMessage('');
		setLoginErrorMessage('');
		setEditProfileMessage('');
		setIsSuccessfulChange(false);
	};

	const handleShortMovies = (evt) => {
		setIsShort(evt.target.checked);

		let foundMovies = JSON.parse(localStorage.getItem('movies'));

		if (evt.target.checked) {
			let foundShortMovies = [];
			foundMovies.forEach((movie) => {
				if (movie.duration <= 40) {
					foundShortMovies.push(movie);
				}
			});
			if (foundShortMovies.length) {
				setMovies(foundShortMovies);
			} else {
				setNotFound(true);
				setMovies([]);
			}
		} else {
			setMovies(foundMovies);
			setNotFound(false);
		}
	};

	const handleShortSavedMovies = (evt) => {
		setIsShortSavedMovie(evt.target.checked);
		const serchSavedMovies = JSON.parse(
			localStorage.getItem('serchSaveMovies')
		);

		if (evt.target.checked) {
			let serchShortSavedMovies = [];
			serchSavedMovies.forEach((movie) => {
				if (movie.duration <= 40) {
					serchShortSavedMovies.push(movie);
				}
			});
			if (serchShortSavedMovies.length) {
				setSavedMovies(serchShortSavedMovies);
			} else {
				setSavedMovies([]);
				setNotFound(true);
			}
		} else {
			setSavedMovies(serchSavedMovies);
			setNotFound(false);
		}
	};

	const handleSearchMovies = (movies, keyword) => {
		let foundMovies = [];

		let lowerKeyword = keyword.toLowerCase();

		movies.forEach((movie) => {
			let lowerMovieName = movie.nameRU.toLowerCase();
			if (~lowerMovieName.indexOf(lowerKeyword)) {
				foundMovies.push(movie);
			}
		});

		return foundMovies;
	};

	const searchMovies = (keyword) => {
		setIsLoading(true);
		setMovies([]);
		setIsError(false);

		moviesApi
			.getMovies()
			.then((movies) => {
				let foundMovies = handleSearchMovies(movies, keyword);

				if (foundMovies.length) {
					localStorage.setItem('movies', JSON.stringify(foundMovies));
					if (isShort) {
						let foundShortMovies = [];
						foundMovies.forEach((movie) => {
							if (movie.duration <= 40) {
								foundShortMovies.push(movie);
							}
						});
						if (foundShortMovies.length) {
							setMovies(foundShortMovies);
							setNotFound(false);
						} else {
							setNotFound(true);
							setMovies([]);
						}
					} else {
						setMovies(JSON.parse(localStorage.getItem('movies')));
						setNotFound(false);
					}
				} else {
					setNotFound(true);
					setMovies([]);
					localStorage.setItem('movies', []);
				}
			})
			.catch((err) => {
				console.log(err);
				setIsError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const searchSavedMovies = (keyword) => {
		const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
		const serchSavedMovies = handleSearchMovies(savedMovies, keyword);

		if (serchSavedMovies.length) {
			localStorage.setItem('serchSaveMovies', JSON.stringify(serchSavedMovies));
			if (isShortSavedMovie) {
				let serchShortSavedMovies = [];
				serchSavedMovies.forEach((movie) => {
					if (movie.duration <= 40) {
						serchShortSavedMovies.push(movie);
					}
				});
				if (serchShortSavedMovies.length) {
					setSavedMovies(serchShortSavedMovies);
					setNotFound(false);
				} else {
					setSavedMovies([]);
					setNotFound(true);
				}
			} else {
				setSavedMovies(serchSavedMovies);
				setNotFound(false);
			}
		} else {
			setSavedMovies([]);
			setNotFound(true);
			localStorage.setItem('serchSaveMovies', []);
		}
	};

	const saveMovie = (movie) => {
		mainApi
			.saveMovie(movie)
			.then((savedMovie) => {
				const myMovies = [...savedMovies, savedMovie];
				localStorage.setItem('savedMovies', JSON.stringify(myMovies));
				setSavedMovies((previousMovies) => [...previousMovies, savedMovie]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteMovie = (movieId) => {
		mainApi
			.deleteMovie(movieId)
			.then(() => {
				const filteredSavedMovies = savedMovies.filter((movie) => {
					return movie._id !== movieId;
				});
				localStorage.setItem(
					'savedMovies',
					JSON.stringify(filteredSavedMovies)
				);
				setSavedMovies(filteredSavedMovies);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onSignOut = () => {
		setLoggedIn(false);
		setMovies([]);
		setSavedMovies([]);
		setCurrentUser({});
		localStorage.removeItem('jwt');
		localStorage.removeItem('movies');
		localStorage.removeItem('savedMovies');
		history.push('/');
	};

	useEffect(() => {
		if (loggedIn) {
			const movies = localStorage.getItem('movies');
			const savedMovies = localStorage.getItem('savedMovies');
			if (movies) {
				setMovies(JSON.parse(movies));
			}
			if (savedMovies) {
				setSavedMovies(JSON.parse(savedMovies));
			}
		}
	}, [loggedIn]);

	return (
		<div className='App'>
			<CurrentUserContext.Provider value={currentUser}>
				<Switch>
					<Route path='/signup'>
						<Register
							onRegister={onRegister}
							errorMessage={registerErrorMessage}
							onClear={clearAllErrorMessages}
						/>
					</Route>
					<Route path='/signin'>
						<Login
							onLogin={onLogin}
							errorMessage={loginErrorMessage}
							onClear={clearAllErrorMessages}
						/>
					</Route>
					<ProtectedRoute path='/profile' isLogin={loggedIn}>
						<Header isLogin={loggedIn} email={email} />
						<Profile
							onSignOut={onSignOut}
							onUpdateUser={handleUpdateUser}
							isSuccessfulChange={isSuccessfulChange}
							message={editProfileMessage}
						/>
					</ProtectedRoute>
					<ProtectedRoute path='/movies' isLogin={loggedIn}>
						<Header isLogin={loggedIn} email={email} />
						<Movies
							movies={movies}
							searchMovies={searchMovies}
							handleShortMovies={handleShortMovies}
							handleSaveMovie={saveMovie}
							handleDeleteMovie={deleteMovie}
							isError={isError}
							isShort={isShort}
							notFound={notFound}
							isLoading={isLoading}
						/>
						<Footer />
					</ProtectedRoute>
					<ProtectedRoute path='/saved-movies' isLogin={loggedIn}>
						<Header isLogin={loggedIn} email={email} />
						<SavedMovies
							movies={savedMovies}
							notFound={notFound}
							isShortSavedMovie={isShortSavedMovie}
							searchSavedMovies={searchSavedMovies}
							handleShortSavedMovies={handleShortSavedMovies}
							handleDeleteMovie={deleteMovie}
						/>
						<Footer />
					</ProtectedRoute>
					<Route exact path='/'>
						<Header isLogin={loggedIn} email={email} />
						<Main />
						<Footer />
					</Route>
					<Route path='*'>
						<NotResult />
					</Route>
				</Switch>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
