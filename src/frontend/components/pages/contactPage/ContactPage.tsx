import './contactPage.scss';
import React, { useState, useEffect } from 'react';

import Menu from '../../modules/mehrmals/menu/Menu';
import Contact from '../../modules/einmal/contact/Contact';
import Footer from '../../modules/mehrmals/footer/footer';
import Spinner from '../../modules/mehrmals/spinner/Spinner';

const ContactPage:React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    setLoading(false);
	}, []);

	return (
		<>
		{loading ? (
			<Spinner />
		) : (
			<div className="contactPage">
				<div className="contactPage_menu">
					<Menu hasBackground={true} colorNr={4}/>
				</div>
				<div className="contactPage_contact">
					<Contact />
				</div>
				<div className="contactPage_footer">
					<Footer />
				</div>
			</div>
			)
		}
		</>
	)
};

export default ContactPage;