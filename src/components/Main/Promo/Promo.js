import './Promo.css';

const Promo = () => {
	return (
		<section className='promo'>
			<h1 className='promo__title'>
				Учебный проект студента факультета Веб-разработки.
			</h1>
			<nav className='promo__navigation'>
				<a href='/#aboutproject' target='_self' className='promo__link'>
					О проекте
				</a>
				<a href='/#techs' target='_self' className='promo__link'>
					Технологии
				</a>
				<a href='/#aboutme' target='_self' className='promo__link'>
					Студент
				</a>
			</nav>
		</section>
	);
};

export default Promo;
