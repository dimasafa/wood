import React from 'react';
import './spinner.scss';

const Spinner: React.FC = ( top, left ) => {
	return (
		<div className="spinner">
			<span className="spinner_loader"></span>
		</div>

		);
};

export default Spinner;