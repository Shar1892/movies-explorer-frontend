import students__photo from '../../../images/StudentsPhoto.png';

import './AboutMe.css';

const AboutMe = () => {
	return (
		<section className='about-me' id='aboutme'>
			<div className='about-me__title-container'>
				<h2 className='about-me__title'>Студент</h2>
			</div>
			<div className='about-me__discription-container'>
				<img
					src={students__photo}
					alt='Фото студента'
					className='about-me__description-photo'
				/>
				<div className='about-me__description'>
					<h2 className='about-me__description-title'>Сергей</h2>
					<p className='about-me__description-subtitle'>
						Фронтенд-разработчик, 37 лет
					</p>
					<p className='about-me__description-paragraph'>
						Я родился и живу в Ярославле, закончил физический факультет ЯрГУ. Я
						люблю слушать музыку, смотреть футбол и сериалы. Пять лет назад я
						устроился работать тестировщиком в компанию Тензори понемногу стал
						смотреть, что представляют из себя приложения изнутри. Так я
						познакомился с HTML, CSS и наконец с JS. Решил, что хочу писать код
						и создавать программы сам. Поэтому я пошел учиться в
						Яндекс.Практикум.
					</p>
					<div className='about-me__description-links'>
						<a
							className='about-me__description-link'
							href='https://www.facebook.com'
							target='_blank'
							rel='noreferrer'
						>
							Facebook
						</a>
						<a
							className='about-me__description-link'
							href='https://github.com'
							target='_blank'
							rel='noreferrer'
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
