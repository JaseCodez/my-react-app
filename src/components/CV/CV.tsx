import './CV.css'
import cv from '../../images/cv'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


interface CV {
    name: string, 
    img: string 
}

function CV() {
    return (
        <div className='cv-container'>
            <div id="resume-container">
                <img src={cv['resume'].img} className='cv' />
            </div>
            <div id="cover-container">
                <img src={cv['cover'].img} className='cv' />
            </div>

        </div>
    );
}

export default CV;