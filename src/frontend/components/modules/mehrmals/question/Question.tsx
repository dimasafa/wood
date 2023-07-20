import '../../../../fonts/fonts.css';
import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import Modal from '../modal/ModalQuestion';

import img from '../../../../resources/question/image.png';
import './question.scss';

const Question: React.FC = () => {

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [frage, setFrage] = useState('');

    const [modal, setModal] = useState(false);


    const [loading, setLoading] = useState(true);

    const createFrage = async () => {
		try {
			await axios.post('/api/frage/add', {
				name,
				tel,
				frage
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
            .then((response) => {
                console.log(response);
                setModal(true); // Очистить форму после успешной отправки
            })
		} catch (error) {
			console.log(error);
		}
	};

    if (modal) {
        return (
            <>
                <Modal />
            </>
        )
    }



    return (
        <div className="question">
            <div className="question_title">Any questions?</div>
            <div className="question_box">
                <div className="question_box_form">
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                            required 
                            className="question_box_form_one" 
                            placeholder="Your name" 
                            name="name" 
                            id="name"
                            type="text" 
                            onChange={e => setName(e.target.value)} 
                        />
                        <input 
                            required 
                            className="question_box_form_two" 
                            placeholder="Your telephone number" 
                            name="tel" 
                            type="tel" 
                            id="tel"
                            onChange={e => setTel(e.target.value)}
                        />
                        <textarea 
                            required 
                            className="question_box_form_three" 
                            placeholder="Your question" 
                            name="frage" 
                            id="frage" 
                            onChange={e => setFrage(e.target.value)}
                        ></textarea>
                        <button 
                            className="question_box_form_four" 
                            onClick={createFrage}
                            >
                                Send
                        </button>
                    </form>
                </div>
                <div className="question_box_text">Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</div>
            </div>
            <div className="question_img">
                <img src={img} alt="image" />
            </div>
        </div>
    )
}


export default Question;