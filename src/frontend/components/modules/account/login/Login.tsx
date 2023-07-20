import './login.scss';
import '../../../../fonts/fonts.css';
import axios from "axios";
import { AuthContext } from '../../../../context/AuthContext';

import React, { useState, useContext } from "react";

import { Link, useNavigate } from 'react-router-dom';

const Login:React.FC = () => {

	const { login } = useContext(AuthContext);

	const navigate = useNavigate();

	const [form, setForm] = useState ({
		email: '',
		password: ''
	});

	const [fehler, setFehler] = useState('');

	const redirectTo = () => {
		navigate('/konto');
	}

	const changeHandler = (event:any) => {
		setForm({...form, [event.target.name]: event.target.value})
		console.log(form);
	}

	const loginHandler = async () => {
		try {
			const response = await axios.post('/api/auth/login', {...form}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const data = response.data;
			await login(data.token, data.userId);
			redirectTo();
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as any;
				if (axiosError.response?.data?.errors) {
				const errors = axiosError.response.data.errors;
				errors.forEach((err: any) => {
					console.log(err.msg);
					setFehler(err.msg);
				});
				} else if (axiosError.response?.status === 400) {
					setFehler('There is no such email');
				} else if (axiosError.response?.status === 401) {
					setFehler('Password error');
				} else {
					setFehler('An error occurred by request to the server');
				}
			}
		}
	}


	return (
		<div className="login">
			<div className="login_title">Enter your login and password</div>
			<form className="login_form" onSubmit={e => e.preventDefault()}>
				<div className="login_form_close">
					<Link to="/" style={{ textDecoration: 'none' }}>
						&times;
					</Link>
				</div>
				<input 
					className="login_form_email" 
					required 
					placeholder="Your email" 
					type="email" 
					name="email"
					onChange={changeHandler}
					/>
				<input 
					className="login_form_pass" 
					required 
					placeholder="Your password" 
					type="password" 
					name="password"
					onChange={changeHandler}
					/>
				<div className="login_form_btnBlock">
					<button 
						className="login_form_btnBlock_btn" 
						type="submit" onClick={loginHandler}>Login</button>
					<div className="login_form_btnBlock_reg">
						<Link to="/registration" style={{ textDecoration: 'none' , color: 'black'}}>
							No Konto?
						</Link>
					</div>
				</div>
			</form>
			<div className="registration_error">
				{fehler}
			</div>
		</div>
	);
};

export default Login;