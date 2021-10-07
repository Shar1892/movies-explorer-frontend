const BASE_URL = 'https://api.movieexp.sgsharov.nomoredomains.club';

export const register = (name, email, password) => {
	return fetch(`${BASE_URL}/signup`, {
		mode: 'cors',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: name,
			password: password,
			email: email,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.catch((err) => Promise.reject(err));
};

export const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		mode: 'cors',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			password: password,
			email: email,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
		})
		.then((data) => {
			if (data.token) {
				localStorage.setItem('jwt', data.token);
			}
			return data;
		})
		.catch((err) => Promise.reject(err));
};

export const getUser = () => {
	return fetch(`${BASE_URL}/users/me`, {
		mode: 'cors',
		method: 'GET',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
		})
		.catch((err) => Promise.reject(err));
};

export const setUserData = (name, email) => {
	return fetch(`${BASE_URL}/users/me`, {
		mode: 'cors',
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
		body: JSON.stringify({
			name: name,
			email: email,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
		})
		.catch((err) => Promise.reject(err));
};

export const getSavedMovies = () => {
	return fetch(`${BASE_URL}/movies`, {
		mode: 'cors',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
		})
		.catch((err) => Promise.reject(err));
};

export const saveMovie = (movie) => {
	return fetch(`${BASE_URL}/movies`, {
		mode: 'cors',
		method: 'POST',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			country: movie.country,
			director: movie.director,
			duration: movie.duration,
			year: movie.year,
			description: movie.description,
			image: movie.image,
			trailer: movie.trailer,
			nameRU: movie.nameRU,
			nameEN: movie.nameEN,
			thumbnail: movie.thumbnail,
			movieId: movie.movieId,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
		})
		.catch((err) => Promise.reject(err));
};

export function deleteMovie(movieId) {
	return fetch(`${BASE_URL}/movies/${movieId}`, {
		mode: 'cors',
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
		})
		.catch((err) => Promise.reject(err));
}
