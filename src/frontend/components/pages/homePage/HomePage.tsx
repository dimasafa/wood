import './homePage.scss';
import React, { useState, useEffect } from 'react';

import Menu from '../../modules/mehrmals/menu/Menu';
import Solid from '../../modules/einmal/solid/Solid';
import Wood from '../../modules/mehrmals/woodArt/WoodArt';
import Work from '../../modules/mehrmals/ourWork/OurWork';
import About from '../../modules/mehrmals/about/About';
import Question from '../../modules/mehrmals/question/Question';
import Footer from '../../modules/mehrmals/footer/footer';
import StartSpinner from '../../modules/mehrmals/spinner/StartSpinner';

const HomePage:React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
		setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
	<>
		{loading ? (
			<StartSpinner />
		) : (
			<div className="homePage">
			<div className="homePage_menu">
				<Menu hasBackground={false} colorNr={0} />
			</div>
			<div className="homePage_solid">
				<Solid />
			</div>
			<div className="homePage_wood">
				<Wood />
			</div>
			<div className="homePage_work">
				<Work />
			</div>
			<div className="homePage_about">
				<About />
			</div>
			<div className="homePage_question">
				<Question />
			</div>
			<div className="homePage_footer">
				<Footer />
			</div>
			</div>
		)}
    </>
		
	)
}

export default HomePage;