import { Router } from 'express';
import { Order } from '../models/Order.js';

const router = Router();

router.post('/add', async (req, res) => {
	try {
		const { orderTime, allOrder, sum, lieferung, bestellung, userId } = req.body

		const kauf = await new Order({
			orderTime,
			allOrder,
			sum,
			lieferung,
			bestellung,
			owner: userId
		})

		await kauf.save();

		res.json(kauf);
	} catch (error) {
		console.log(error);
	}
});

router.get('/', async (req, res) => {
	try {
		const { userId } = req.query;

		const kauf = await Order.find({ owner: userId });

		res.json(kauf);

	} catch (error) {
		console.log(error)
	};
});



export default router;

