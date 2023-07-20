import './kontoOrder.scss';
import '../../../../fonts/fonts.css';
import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthContext.js';
import Spinner from '../../mehrmals/spinner/Spinner';


const Ordered: React.FC = () => {

	interface Order {
		orderTime: string;
		allOrder: { [key: string]: { _type: string; _grosse: string; _price: number }[] };
		sum: number,
		lieferung: number,
		bestellung: number
	}



	const { userId } = useContext(AuthContext);

	const [orders, setOrders] = useState<Order[]>([]);
	const [loading, setLoading] = useState(true);

	const getOrder = useCallback(async () => {
		try {
			await axios.get('/api/order', {
				headers: {
					'Content-Type': 'application/json'
				},
				params: { userId }
			})
			.then((response) => {
			const data = response.data;
			setOrders(data);
			setLoading(false);
			})
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	},[userId])

	useEffect(() => {
		getOrder()
	}, [getOrder]);


	return (
		<div className="order">
			<div className="order_title">Your Orders </div>
			<div className="order_overflow">
				{
					loading ? <Spinner /> :
					orders.map((order, index) => {
						return (
							<div className="order_db">
								<div className="order_db_box" key={index}>
									<div className="order_db_box_time">{order.orderTime}</div>
									<div className="order_db_box_order">
										{Object.values(order.allOrder).map((array, idx) => (
										<div key={idx} >
											{array.map((item, i:number) => (
											<div key={i} className="order_db_box_order_line">
												<div>Type: {item._type}</div>
												<div>Größe: {item._grosse}</div>
												<div>Price: {item._price}</div>
											</div>
											))}
										</div>
										))}
									</div>
									<div className="order_db_box_sum">Items <br></br>cost: <br></br>{order.sum} €</div>
									<div className="order_db_box_lieferung">Delivery: <br></br>{order.lieferung} €</div>
									<div className="order_db_box_bestellung">Summe: <br></br>{order.bestellung} €</div>
								</div>
							</div>
						)
					})
				}
			</div>

		</div>
	);
};

export default Ordered;