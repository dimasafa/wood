import { Router } from "express";
import { Frage } from "../models/Frage.js";

const router = Router();

router.post('/add', async (req, res) => {
	try {
		const { name, tel, frage } = req.body;

		const question = await new Frage({
			name,
			tel,
			frage
		})

		await question.save();

		res.json(question);

	} catch (error) {
		console.log(error);
	}
});

export default router;