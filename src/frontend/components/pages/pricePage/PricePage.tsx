import './pricePage.scss';
import React, { useState, useEffect } from 'react';

import Menu from '../../modules/mehrmals/menu/Menu';
import Price from '../../modules/einmal/priceList/PriceList';
import Question from '../../modules/mehrmals/question/Question';
import Footer from '../../modules/mehrmals/footer/footer';
import Spinner from '../../modules/mehrmals/spinner/Spinner';

const PricePage:React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    setLoading(false);
	}, []);
	
	return (
		<>
		{loading ? (
			<Spinner />
		) : (
			<div className="pricePage">
				<div className="pricePage_menu">
					<Menu hasBackground={true} colorNr={2}/>
				</div>
				<div className="pricePage_price">
					<Price />
				</div>
				<div className="pricePage_question">
					<Question />
				</div>
				<div className="pricePage_footer">
					<Footer />
				</div>
			</div>
			)
		}
		</>
		

	)
}

export default PricePage;