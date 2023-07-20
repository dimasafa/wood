import './galleryPage.scss';
import React, { useState, useEffect } from 'react';

import Menu from '../../modules/mehrmals/menu/Menu';
import Work from '../../modules/mehrmals/ourWork/OurWork';
import Wood from '../../modules/mehrmals/woodArt/WoodArt';
import Question from '../../modules/mehrmals/question/Question';
import Footer from '../../modules/mehrmals/footer/footer';
import Spinner from '../../modules/mehrmals/spinner/Spinner';

const GalleryPage:React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    setLoading(false);
	}, []);

	return (
		<>
		{loading ? (
			<Spinner />
		) : (
			<div className="galleryPage">
				<div className="galleryPage_menu">
					<Menu hasBackground= {true} colorNr = {1}/>
				</div>
				<div className="galleryPage_work">
					<Work />
				</div>
				<div className="galleryPage_wood">
					<Wood />
				</div>
				<div className="galleryPage_question">
					<Question />
				</div>
				<div className="galleryPage_footer">
					<Footer />
				</div>
			</div>
			)
		}
		</>
	)
}

export default GalleryPage;