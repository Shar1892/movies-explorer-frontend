import './Portfolio.css';

import arrow from '../../../images/arrow.svg';

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<h2 className='portfolio__title'>Портфолио</h2>
			<ul className='portfolio__links'>
				<li className='portfolio__link-container'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Shar1892/how-to-learn'
						className='portfolio__link'
					>
						Статичный сайт
					</a>
					<img src={arrow} alt='Стрелка' className='portfolio__arrow' />
				</li>
				<li className='portfolio__link-container'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Shar1892/russian-travel'
						className='portfolio__link'
					>
						Адаптивный сайт
					</a>
					<img src={arrow} alt='Стрелка' className='portfolio__arrow' />
				</li>
				<li className='portfolio__link-container'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Shar1892/react-mesto-api-full'
						className='portfolio__link'
					>
						Одностраничное приложение
					</a>
					<img src={arrow} alt='Стрелка' className='portfolio__arrow' />
				</li>
			</ul>
		</section>
	);
};

export default Portfolio;
