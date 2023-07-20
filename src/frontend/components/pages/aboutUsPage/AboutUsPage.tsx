import './aboutUsPage.scss';
import React, { useState, useEffect } from 'react';

import Menu from '../../modules/mehrmals/menu/Menu';
import About from '../../modules/mehrmals/about/About';
import Work from '../../modules/mehrmals/ourWork/OurWork';
import Question from '../../modules/mehrmals/question/Question';
import Footer from '../../modules/mehrmals/footer/footer';
import Spinner from '../../modules/mehrmals/spinner/Spinner';

const AboutUsPage:React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    setLoading(false);
	}, []);


	return(
		<>
		{loading ? (
			<Spinner />
		) : (
			<div className="aboutUsPage">
				<div className="aboutUsPage_menu">
					<Menu hasBackground={true} colorNr={3}/>
				</div>
				<div className="aboutUsPage_about">
					<About />
				</div>
				<div className="aboutUsPage_work">
					<Work />
				</div>
				<div className="aboutUsPage_question">
					<Question />
				</div>
				<div className="aboutUsPage_footer">
					<Footer />
				</div>
			</div>
			)
		}
		</>
	)
};

export default AboutUsPage;