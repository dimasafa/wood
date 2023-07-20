import './modalQuestion.scss';
import '../../../../fonts/fonts.css';
import { Link } from 'react-router-dom'; 

const Modal:React.FC = () => {
	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal_close">
					<Link to="/gallery" style={{ textDecoration: 'none' }}>
						&times;
					</Link>
				</div>
				<div className="modal_text">Your Question has been successfully sent </div>
			</div>
		</div>

	)
}

export default Modal;