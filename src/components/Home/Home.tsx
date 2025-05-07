import './Home.css'
import pfp from '../../images/allmysocialmediaaccountsafteronegoodpicture.jpg'

function PFP() {
    return (
        <div className='home'>
            <img src={pfp} alt='Avatar'></img>

            <h1>Hey there! I'm <span>Jason Phan</span>, I'm a student at the University of Toronto Mississauga studying Computer Science</h1>
        </div>
    );
}

export default PFP; 