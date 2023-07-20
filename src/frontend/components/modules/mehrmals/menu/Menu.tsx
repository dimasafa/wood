import '../../../../fonts/fonts.css';
import './Menu.scss';
import logo from "../../../../resources/menu/logo.png";
import { Link } from "react-router-dom";

type MenuProps = {
    hasBackground: boolean;
    colorNr: number;
};

const Menu: React.FC<MenuProps> = ({ hasBackground, colorNr }) => {
    const menuClass = hasBackground ? 'menu_with-background' : 'menu';
    let one: React.CSSProperties = {};
    let two: React.CSSProperties = {};
    let three: React.CSSProperties = {};
    let four: React.CSSProperties = {};

    if (colorNr === 1) {
        one = {
            color: '#A3B8D7',
        };
    } else if (colorNr === 2) {
        two = {
            color: '#A3B8D7',
        };
    } else if (colorNr === 3) {
        three = {
            color: '#A3B8D7',
        };
    } else if (colorNr === 4) {
        four = {
            color: '#A3B8D7',
        };
    }

    

    return (
        <div className={menuClass} >
            <div className="menu_logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="menu_list" >
                <li >
                    <Link style={one} to="/gallery">Gallery</Link>
                </li>
                <li >
                    <Link style={two} to="/price">Prices for services</Link>
                    </li>
                <li >
                    <Link style={three} to="/about">About us</Link>
                </li>
                <li >
                    <Link style={four} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li className="menu_list_sign">
                    <Link to="/registration">Sign Up</Link>
                </li>
            </div>

        </div>
    )
}

export default Menu;