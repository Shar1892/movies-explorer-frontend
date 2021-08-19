import './AboutProject.css';

const AboutProject = () => {
	return (
		<section className='about-project' id='aboutproject'>
			<div className='about-project__title-container'>
				<h2 className='about-project__title'>О проекте</h2>
			</div>
			<div className='about-project__stages'>
				<div className='about-project__stage'>
					<h3 className='about-project__stage-title'>
						Дипломный проект включал 5 этапов
					</h3>
					<p className='about-project__stage-paragraph'>
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</div>
				<div className='about-project__stage'>
					<h3 className='about-project__stage-title'>
						На выполнение диплома ушло 5 недель
					</h3>
					<p className='about-project__stage-paragraph'>
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</div>
			</div>
			<div className='about-project__blocks'>
				<div className='about-project__block'>
					<div className='about-project__duration-container about-project__duration-container_type_green'>
						<p className='about-project__duration'>1 неделя</p>
					</div>
					<p className='about-project__description'>Back-end</p>
				</div>
				<div className='about-project__block'>
					<div className='about-project__duration-container about-project__duration-container_type_gray'>
						<p className='about-project__duration'>4 неделя</p>
					</div>
					<p className='about-project__description'>Front-end</p>
				</div>
			</div>
		</section>
	);
};

export default AboutProject;
