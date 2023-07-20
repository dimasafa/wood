import { useState } from 'react';


import '../../../../fonts/fonts.css';
import foto1 from '../../../../resources/ourWork/foto1.png';
import foto2 from '../../../../resources/ourWork/foto2.jpg';
import foto3 from '../../../../resources/ourWork/foto3.jpg';
import pfeileLinks from '../../../../resources/ourWork/pfeilelinks.png';
import pfeileRechts from '../../../../resources/ourWork/pfeilerechts.png';

import './ourWork.scss';


const OurWork: React.FC = () => {

    const [slider1, setSlider1] = useState('work_sliderScreen_sliderFoto_aktiv');
    const [slider2, setSlider2] = useState('work_sliderScreen_sliderFoto');
    const [slider3, setSlider3] = useState('work_sliderScreen_sliderFoto');


    const [point1, setPoint1] = useState('work_pointbox_point_aktiv');
    const [point2, setPoint2] = useState('work_pointbox_point');
    const [point3, setPoint3] = useState('work_pointbox_point');

    function pointSlider (id: number) {
        if (id === 1) {
            if (point1 !== 'work_pointbox_point_aktiv') {
                setPoint1('work_pointbox_point_aktiv');
                setPoint2('work_pointbox_point');
                setPoint3('work_pointbox_point');

                setSlider1('work_sliderScreen_sliderFoto_aktiv');
                setSlider2('work_sliderScreen_sliderFoto');
                setSlider3('work_sliderScreen_sliderFoto');
            }
        } else if (id === 2) {
            if (point2 !== 'work_pointbox_point_aktiv') {
                setPoint1('work_pointbox_point');
                setPoint2('work_pointbox_point_aktiv');
                setPoint3('work_pointbox_point');

                setSlider1('work_sliderScreen_sliderFoto');
                setSlider2('work_sliderScreen_sliderFoto_aktiv');
                setSlider3('work_sliderScreen_sliderFoto');
            }
        } else if (id === 3) {
            if (point3 !== 'work_pointbox_point_aktiv') {
                setPoint1('work_pointbox_point');
                setPoint2('work_pointbox_point');
                setPoint3('work_pointbox_point_aktiv');

                setSlider1('work_sliderScreen_sliderFoto');
                setSlider2('work_sliderScreen_sliderFoto');
                setSlider3('work_sliderScreen_sliderFoto_aktiv');
            }
        }
    }

    function pfeileSlider (id: number) {
        if (id === 1) {
            if (slider1 === 'work_sliderScreen_sliderFoto_aktiv') {
                setSlider1('work_sliderScreen_sliderFoto');
                setSlider3('work_sliderScreen_sliderFoto_aktiv');
                setPoint1('work_pointbox_point');
                setPoint3('work_pointbox_point_aktiv');
            } else if (slider2 === 'work_sliderScreen_sliderFoto_aktiv') {
                setSlider2('work_sliderScreen_sliderFoto');
                setSlider1('work_sliderScreen_sliderFoto_aktiv');
                setPoint2('work_pointbox_point');
                setPoint1('work_pointbox_point_aktiv');
            } else if (slider3 === 'work_sliderScreen_sliderFoto_aktiv') {
                setSlider3('work_sliderScreen_sliderFoto');
                setSlider2('work_sliderScreen_sliderFoto_aktiv');
                setPoint3('work_pointbox_point');
                setPoint2('work_pointbox_point_aktiv');
            }
        } else if (id === 2) {
            if (slider1 === 'work_sliderScreen_sliderFoto_aktiv') {
                setSlider1('work_sliderScreen_sliderFoto');
                setSlider2('work_sliderScreen_sliderFoto_aktiv');
                setPoint1('work_pointbox_point');
                setPoint2('work_pointbox_point_aktiv');
            } else if (slider2 === 'work_sliderScreen_sliderFoto_aktiv') {
                setSlider2('work_sliderScreen_sliderFoto');
                setSlider3('work_sliderScreen_sliderFoto_aktiv');
                setPoint2('work_pointbox_point');
                setPoint3('work_pointbox_point_aktiv');
            } else if (slider3 === 'work_sliderScreen_sliderFoto_aktiv') {
                setSlider3('work_sliderScreen_sliderFoto');
                setSlider1('work_sliderScreen_sliderFoto_aktiv');
                setPoint3('work_pointbox_point');
                setPoint1('work_pointbox_point_aktiv');
            }
        }
    }


    return (
        <div className="work">
            <div className="work_title">Our work</div>
            <div className="work_sliderbox">
                <div className="work_sliderScreen">
                    <img className={slider1} src={foto1} alt="foto1" />
                    <img className={slider2} src={foto2} alt="foto2" />
                    <img className={slider3} src={foto3} alt="foto3" />
                </div>
                <div className="work_pointbox">
                    <div onClick={() => pointSlider(1)} className={point1}></div>
                    <div onClick={() => pointSlider(2)} className={point2}></div>
                    <div onClick={() => pointSlider(3)} className={point3}></div>
                </div>
                <div onClick={() => pfeileSlider(1)} className="work_linksPfeile">
                    <img src={pfeileLinks} alt="nachLinks" />
                </div>
                <div onClick={() => pfeileSlider(2)} className="work_rechtsPfeile">
                    <img src={pfeileRechts} alt="nachRechts" />
                </div>
            </div>
        </div>
    )
}


export default OurWork;