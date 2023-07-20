import './kontoDaten.scss';
import '../../../../fonts/fonts.css';
import axios from 'axios';

import React, { useState, useContext, useCallback, useEffect } from 'react';
import { AuthContext } from '../../../../context/AuthContext.js';
import Spinner from '../../mehrmals/spinner/Spinner';

const Daten:React.FC = () => {

	const { userId } = useContext(AuthContext);

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [age, setAge] = useState(0);
	const [land, setLand] = useState('');
	const [city, setCity] = useState('');
	const [plz, setPlz] = useState(0);
	const [street, setStreet] = useState('');
	const [house, setHouse] = useState(0);

	const [delId, setDelId] = useState('');

	const [loading, setLoading] = useState(true);


	const getTodo = useCallback(async () => {
		try {
			await axios.get('/api/data', {
				headers: {
					'Content-Type': 'application/json'
				},
				params: { userId }
			})
			.then((response) => {
			const data = response.data[0];
			setDelId(data._id);
			setName(data.name);
			setSurname(data.surname);
			setAge(data.age);
			setLand(data.land);
			setCity(data.city);
			setPlz(data.plz);
			setStreet(data.street);
			setHouse(data.house);
			setLoading(false);
			})
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	},[userId])


	const removeTodo = useCallback(async (id:any) => {
		try {
			await axios.delete(`/api/data/delete/${id}`, {
				headers: {
					'Content-Type': 'application/json'
				},
				params: { id }
			})
			.then(() => getTodo())
		} catch (error) {
			console.log(error)
		}
	}, [getTodo]);


	const createTodo = useCallback(async () => {
		try {
			if (delId) {
				removeTodo(delId)
			}
			await axios.post('/api/data/add', {
				name,
				surname,
				age,
				land,
				city,
				plz,
				street,
				house,
				userId,
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(() => {
				getTodo();
			})
		} catch (error) {
			console.log(error);
		}
	}, [name, surname, age, land, city, plz, street, house, userId, getTodo,delId, removeTodo]);

	useEffect(() => {
		getTodo()
	}, [getTodo]);

	return(
		<div className="daten">
			<div className="daten_title">Your personal data</div>
			{
				loading ? <Spinner /> :
				<form className="daten_box"/*  onSubmit={e => e.preventDefault()} */>
				<div className="daten_box_one">
					<input 
						type="text" 
						name="name"
						id="name"
						onChange={e => setName(e.target.value)} 
						placeholder={name ? name : 'Your Name'} />
					<input 
						type="text" 
						name="surname" 
						id="surname"
						onChange={e => setSurname(e.target.value)} 
						placeholder={surname ? surname : 'Your Surname'}
						/>
					<input 
						type="text" 
						name="age" 
						id="age"
						onChange={e => setAge(parseInt(e.target.value))} 
						placeholder={age.toString() !== '0' ? age.toString() : 'Your Age'}
						/>
				</div>
				<div className="daten_box_adress">Delivery</div>
				<div className="daten_box_two">
					<input 
						type="text" 
						name="land" 
						id="land"
						onChange={e => setLand(e.target.value)} 
						placeholder={land ? land : 'Land'}/>
					<input 
						type="text" 
						name="city" 
						id="city"
						onChange={e => setCity(e.target.value)} 
						placeholder={city ? city : 'City'} />
					<input 
						type="text" 
						name="plz" 
						id="plz"
						onChange={e => setPlz(parseInt(e.target.value))} 
						placeholder={plz.toString() !== '0' ? plz.toString() : 'Post code'} />
					<input 
						type="text" 
						name="street" 
						id="street"
						onChange={e => setStreet(e.target.value)} 
						placeholder={street ? street : 'Street'}/>
					<input 
						type="text" 
						name="house" 
						id="house"
						onChange={e => setHouse(parseInt(e.target.value))}  
						placeholder={house.toString() !== '0' ? house.toString() : 'House Nr.'} />
				</div>
				<div className="daten_box_three">
					
					<button onClick={createTodo} className="daten_box_three_btn2">Save</button>
					
				</div>
			</form>
			}

		</div>
	);
};

export default Daten;