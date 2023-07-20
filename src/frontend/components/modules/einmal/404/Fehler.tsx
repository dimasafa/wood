import '../../../../fonts/fonts.css';
import './fehler.scss';
import nul from "../../../../resources/404/noll.png";
import four from "../../../../resources/404/four.png";
import { Link } from "react-router-dom";

const Fehler: React.FC = () => {


    return (
        <div className="fehler">
            <div className="fehler_zahl">
                <img src={four} alt="4" />
                <img className="fehler_zahl_null" src={nul} alt="0" />
                <img src={four} alt="4" />
            </div>
            <div className="fehler_text1">Woops</div>
            <div className="fehler_text2">Oh, you must be lost, there is no such page.</div>
                <Link to="/">
                    <button className="fehler_button">Go to the home page</button>
                </Link>
        </div>
    )
}


export default Fehler;