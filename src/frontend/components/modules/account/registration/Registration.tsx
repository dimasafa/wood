import './registration.scss';
import '../../../../fonts/fonts.css';
import axios from "axios";

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Registration:React.FC = () => {
	const navigate = useNavigate();

	const [form, setForm] = useState ({
		email: '',
		password: ''
	});

	const [fehler, setFehler] = useState('');

	const redirectTo = () => {
		navigate('/login');
	}

	const changeHandler = (event:any) => {
		setForm({...form, [event.target.name]: event.target.value})
		console.log(form);
	}

	const registerHandler = async () => {
		try {
			await axios.post('/api/auth/registration', {...form}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(resonse => console.log(resonse))
			.then(redirectTo);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as any;
				if (axiosError.response?.data?.errors) {
				const errors = axiosError.response.data.errors;
				errors.forEach((err: any) => {
					console.log(err.msg);
					setFehler(err.msg);
				});
				} else {
				setFehler('An error occurred by request to the server');
				}
			}
		}
	}



	return (
		<div className="registration">
			<div className="registration_title">Enter your data</div>
			<form className="registration_form" onSubmit={e => e.preventDefault()}>
				<div className="registration_form_close">
					<Link to="/" style={{ textDecoration: 'none' }}>
						&times;
					</Link>
				</div>
				<input 
					className="registration_form_email" 
					required 
					placeholder="Enter your email" 
					type="email"
					name="email"
					onChange={changeHandler}
					/>
				<input 
					className="registration_form_pass" 
					required 
					placeholder="Enter your password" 
					type="password" 
					name="password"
					onChange={changeHandler}
					/>
				<button 
					className="registration_form_btn" 
					type="submit"
					onClick={registerHandler}>Sign Up</button>
			</form>

			<div className="registration_error">
				{fehler}
			</div>

		</div>
	);
};

export default Registration;