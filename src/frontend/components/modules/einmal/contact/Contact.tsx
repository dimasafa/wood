import './contact.scss';
import '../../../../fonts/fonts.css';

import map from '../../../../resources/contact/MAP.png';
import tel from '../../../../resources/contact/phone.png';
import geo from '../../../../resources/contact/geo.png';


const Contact:React.FC = () => {
	return (
		<div className="contact">
			<div className="contact_text">
				<div className="contact_text_title">Contact</div>
				<div className="contact_text_tel">
					<img src={tel} alt="phone" />
					<div className="contact_text_tel_number">+420 000 000 000</div>
				</div>
				<div className="contact_text_adress">
					<img src={geo} alt="geoLogo" />
					<div className="contact_text_adress_adr">Na Plzeňce 1166/0150 00</div>
				</div>
			</div>
			<div className="contact_map">
				<img src={map} alt="map" />
			</div>
		</div>
	);
};

export default Contact;