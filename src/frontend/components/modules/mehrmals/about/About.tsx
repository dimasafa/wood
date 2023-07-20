import React from 'react';
import './about.scss';
import '../../../../fonts/fonts.css';
import img1 from '../../../../resources/about/big_img.png';
import img2 from '../../../../resources/about/klein_img1.png';
import img3 from '../../../../resources/about/klein_img2.png';

const About: React.FC = () => {

    return (
        <div className="about">
            <div className="about_text">
                <div className="about_text_title">About us</div>
                <div className="about_text_descr">BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</div>
            </div>
            <div className="about_fotoBox">
                <div className="about_fotoBox_foto1">
                    <img src={img1} alt="bigFoto" />
                </div>
                <div className="about_fotoBox_foto2">
                    <img src={img2} alt="kleinFoto1" />
                </div>
                <div className="about_fotoBox_foto3">
                    <img src={img3} alt="kleinFoto2" />
                </div>
            </div>
        </div>
    );
};

export default About;