import './NotResult.css';

const NotResult = () => {
	return (
		<main className='notResult'>
			<div className='notResult__container'>
				<h1 className='notResult__title'>404</h1>
				<p className='notResult__text'>Страница не найдена</p>
			</div>
			<button className='notResult__backbutton'>Назад</button>
		</main>
	);
};

export default NotResult;
