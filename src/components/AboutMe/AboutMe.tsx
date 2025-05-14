import './AboutMe.css'
import jason from '../../images/permed-jason.jpg'
import yap from './AboutMeText'

function AboutMe() {
    return (
       <div className="about-me">
        <div className="about-me-img-container">
            <img src={jason} className="about-me-img" /> 
        </div>

        <div className="about-me-para">
            <p>{yap}</p>
        </div>

       </div> 
    ); 
}

export default AboutMe;