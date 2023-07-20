import './konto.scss';
import '../../../../fonts/fonts.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';

import KontoDaten from '../kontoDaten/KontoDaten';
import KontoCart from '../kontoCart/KontoCart';
import KontoOrder from '../kontoOrder/KontoOrder';

const Konto:React.FC = () => {

	const { logout } = useContext(AuthContext);

	const [status, setStatus] = useState(1);
	const [fontColor1, setFontColor1] = useState({color: 'orange', transition: 'all 0.8s'});
	const [fontColor2, setFontColor2] = useState({color: '#F5F5F5', transition: 'all 0.8s'});
	const [fontColor3, setFontColor3] = useState({color: '#F5F5F5', transition: 'all 0.8s'});

	const setDaten = () => {
		setStatus(1);
		setFontColor1({color: 'orange', transition: 'all 0.8s'})
		setFontColor2({color: '#F5F5F5', transition: 'all 0.8s'})
		setFontColor3({color: '#F5F5F5', transition: 'all 0.8s'})
	}

	const setCart = () => {
		setStatus(2);
		setFontColor2({color: 'orange', transition: 'all 0.8s'})
		setFontColor1({color: '#F5F5F5', transition: 'all 0.8s'})
		setFontColor3({color: '#F5F5F5', transition: 'all 0.8s'})
	}

	const setOrders = () => {
		setStatus(3);
		setFontColor3({color: 'orange', transition: 'all 0.8s'})
		setFontColor1({color: '#F5F5F5', transition: 'all 0.8s'})
		setFontColor2({color: '#F5F5F5', transition: 'all 0.8s'})
	}
	return(
		<div className="konto">
			<div className="konto_gruss">Your login was successful !!!</div>
			<div className="konto_title">Your profile</div>
			<div className="konto_kontent">
				<div className="konto_kontent_menu">
					<li><a onClick={setDaten} style={fontColor1} href="#">Personal data</a></li>
					<li><a onClick={setCart} style={fontColor2} href="#">Cart</a></li>
					<li><a onClick={setOrders} style={fontColor3} href="#">Orders</a></li>
				</div>
				<div className="konto_kontent_text">
					{status === 1 ? (
						<KontoDaten />
					) : status === 2 ? (
						<KontoCart />
					) : (
						<KontoOrder />
					)}

				</div>
			</div>
			<Link to="/login">
				<div className="konto_logout" onClick={logout}>Log Out</div>
			</Link>
			
		</div>
	);
};


export default Konto;