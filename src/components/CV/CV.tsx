import './CV.css'
import cv from '../../images/cv'
import arrows from '../../images/arrows'
import { useState } from 'react';

interface CV {
    name: string, 
    img: string 
}

function CV() {
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <div className='cv-container'>
            <img src={cv[imgIndex].img} className='cv'/>

            <button className="arrow-btn" id="back">
                <img src={arrows['back']} className="arrow" />
            </button>
            <button className="arrow-btn" id="next">
            <img src={arrows['next']} className="arrow" />
            </button>

        </div>
    );
}

export default CV;