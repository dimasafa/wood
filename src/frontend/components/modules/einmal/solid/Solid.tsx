import './solid.scss';
import '../../../../fonts/fonts.css';

import img1 from '../../../../resources/solid/img_1.png';
import img2 from '../../../../resources/solid/img_2.png';
import img3 from '../../../../resources/solid/img_3.png';

import { Link } from 'react-router-dom';

const Solid: React.FC = () => {


	return (
		<div className="solid">
			<div className="solid_linksBlock">
				<div className="solid_linksBlock_title">Solid wood products</div>
				<div className="solid_linksBlock_price">Oak, beech, ash from 1700 CZK per m3</div>
				<div className="solid_linksBlock_button">
					<Link to="/login">
						<button>Order</button>
					</Link>
				</div>
				
			</div>
			<div className="solid_line"></div>
			<img className="solid_img1" src={img1} alt="foto1" />
			<img className="solid_img2" src={img2} alt="foto2" />
			<img className="solid_img3" src={img3} alt="foto3" />
		</div>
	);
};

export default Solid;