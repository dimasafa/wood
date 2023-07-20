import './woodArt.scss';
import '../../../../fonts/fonts.css';

import img1 from '../../../../resources/woodArt/art1.png';
import img2 from '../../../../resources/woodArt/art2.png';
import img3 from '../../../../resources/woodArt/art3.png';


const WoodArt: React.FC = () => {


    return (
        <div className="woodArt">
            <div className="woodArt_title">THE WOOD WE WORK WITH</div>
            <div className="woodArt_wrapper">
                <div className="woodArt_wrapper_packung">
                    <div className="woodArt_wrapper_packung_foto">
                        <img src={img1} alt="foto_1" />
                    </div>
                    <div className="woodArt_wrapper_packung_art">Oak</div>
                    <div className="woodArt_wrapper_packung_vorteile">Durability</div>
                    <div className="woodArt_wrapper_packung_vorteile">Beautiful texture</div>
                    <div className="woodArt_wrapper_packung_vorteile">Water resistance</div>
                    <div className="woodArt_wrapper_packung_nachteile">Expensive</div>
                </div>
                <div className="woodArt_wrapper_packung">
                    <div className="woodArt_wrapper_packung_foto">
                        <img src={img2} alt="foto_2" />
                    </div>
                    <div className="woodArt_wrapper_packung_art">Buk</div>
                    <div className="woodArt_wrapper_packung_vorteile">Durability</div>
                    <div className="woodArt_wrapper_packung_nachteile">Hard to handle</div>
                </div>
                <div className="woodArt_wrapper_packung">
                    <div className="woodArt_wrapper_packung_foto">
                        <img src={img3} alt="foto_3" />
                    </div>
                    <div className="woodArt_wrapper_packung_art">Ash</div>
                    <div className="woodArt_wrapper_packung_vorteile">Durability</div>
                    <div className="woodArt_wrapper_packung_nachteile">Hard to handle</div>
                </div>
            </div>
        </div>
    )
}

export default WoodArt;