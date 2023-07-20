import React from 'react';
import '../../../../fonts/fonts.css';

import logo from '../../../../resources/footer/logo.png';
import phone from '../../../../resources/footer/phone.png';
import geo from '../../../../resources/footer/geo.png';

import './footer.scss';

const Footer: React.FC = () => {


    return (
        <div className="footer">
            <div className="footer_textBox">
                <img src={logo} alt="logo" />
                <div className="footer_textBox_tel">
                    <img src={phone} alt="phone" />
                    <div className="footer_textBox_tel_num">+420 000 000 000</div>
                </div>
                <div className="footer_textBox_geo">
                    <img src={geo} alt="geo" />
                    <div className="footer_textBox_geo_text">Na Plzeňce 1166/0 150 00</div>
                </div>
            </div>
            <div className="footer_policy">
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer;