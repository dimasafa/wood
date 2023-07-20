import { Router } from 'express';
import { Data } from '../models/Data.js';

const router = Router();

router.post('/add', async (req, res) => {
	try {
		const { name, surname, age, land, city, plz, street, house, userId} = req.body

		const todo = await new Data({
			name,
			surname,
			age,
			land,
			city,
			plz,
			street,
			house,
			owner: userId,
			completed: false
		})

		await todo.save();

		res.json(todo);
	} catch (error) {
		console.log(error);
	}
});

router.get('/', async (req, res) => {
	try {
		const { userId } = req.query;

		const todo = await Data.find({ owner: userId });

		res.json(todo);

	} catch (error) {
		console.log(error)
	};
});

router.delete('/delete/:id', async (req,res) => {
	try {
		const todo = await Data.findOneAndDelete({_id: req.params.id})
		res.json(todo)
	} catch (error) {
		console.log(error);
	}
})


export default router;