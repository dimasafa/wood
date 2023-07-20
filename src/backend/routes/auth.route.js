import { Router } from "express";
import { User } from '../models/User.js';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const router = Router();
dotenv.config();

router.post('/registration', 
	[
		check('email', 'Incorrect email').isEmail(),
		check('password', 'The password was entered incorrectly').isLength({min: 6})
	], 
	async (req, res) => {
	try {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Incorrect data during registration'
			});
		};

		const { email, password } = req.body;

		const isUsed = await User.findOne({email})

		if (isUsed) {
			return res.status(400).json({ errors: [{ msg: 'This email is already busy' }] });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = new User ({
			email, 
			password: hashedPassword
		});

		await user.save();

		res.status(201).json({message: 'User created'});
	} catch (error) {
		console.log(error);
	}
});

router.post('/login', 
	[
		check('email', 'Incorrect email').isEmail(),
		check('password', 'The password was entered incorrectly').exists()
	], 
	async (req, res) => {
	try {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Incorrect data during registration'
			});
		};

		const { email, password } = req.body;

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(400).json({message: 'There is no such email in the database'})
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({message: 'Password error'});
		};

		const jwtSecret = process.env.JWT_SECRET;

		const token = jwt.sign(
			{userId: user.id},
			jwtSecret,
			{expiresIn: '1h'}
			);

		res.json({ token, userId: user.id })



	} catch (error) {
		console.log(error);
	}
});





export default router;