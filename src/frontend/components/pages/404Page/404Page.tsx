
import Menu from '../../modules/mehrmals/menu/Menu';
import Page from '../../modules/einmal/404/Fehler';


import './404Page.scss';


const FehlerPage:React.FC = () => {

	return (
		<div className="fehler">
			<div className="fehler_menu">
				<Menu hasBackground={false} colorNr = {0}/>
			</div>
			<div className="fehler_page">
				<Page />
			</div>

		</div>
	)

}

export default FehlerPage;