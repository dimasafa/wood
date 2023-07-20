import React, { useState } from 'react';
import './priceList.scss';
import '../../../../fonts/fonts.css';

import tableImage from '../../../../resources/priceList/PRICE LIST.png';
import left from '../../../../resources/ourWork/pfeilelinks.png';
import right from '../../../../resources/ourWork/pfeilerechts.png';

	const TableComponent: React.FC = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const tableHeight = 6450; // Высота полной таблицы в пикселях
	const windowHeight = 700; // Высота окна компонента в пикселях
	const scrollStep = windowHeight * 0.285; // Шаг прокрутки на 20% от высоты окна

	const handleScrollUp = () => {
		const newPosition = Math.max(scrollPosition - scrollStep, 0);
		setScrollPosition(newPosition);
	};

	const handleScrollDown = () => {
		const maxScroll = Math.max(tableHeight - windowHeight, 0);
		const newPosition = Math.min(scrollPosition + scrollStep, maxScroll);
		setScrollPosition(newPosition);
	};

	return (
		<div className="priceList">
			<div className="priceList_title">PRICE LIST</div>
			<div className="priceList_window">
				<div style={{ height: windowHeight, overflow: 'hidden' }}>
					<div style={{ transform: `translateY(-${scrollPosition}px)` }}>
						<img src={tableImage} alt="Price List" />
					</div>
				</div>
			</div>
			<div className="priceList_btn">

				<img className="priceList_btn_left" src={left} onClick={handleScrollUp} alt="pfeileLeft" />
				<img className="priceList_btn_right" src={right} onClick={handleScrollDown} alt="pfeileRight" />
			</div>
		</div>
	);
};

export default TableComponent;