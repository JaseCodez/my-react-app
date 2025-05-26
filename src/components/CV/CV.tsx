import './CV.css'
import cv from '../../images/cv'
import arrows from '../../images/arrows'
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


interface CV {
    name: string, 
    img: string 
}

function CV() {
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <div className='cv-container'>
            <img src={cv[imgIndex].img} className='cv'/>

            <IoIosArrowBack size={40} className='arrow' id='back'/>
            <IoIosArrowForward size={40} className='arrow' id='next'/>

        </div>
    );
}

export default CV;