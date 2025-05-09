import './Projects.css'
import utmRbt from '../../images/UTMRobotics.jpg'
import ardRbt from '../../images/UTRAHacks.jpg'
import mysh from '../../images/UTRAHacks.jpg'
interface project {
    name: string;
    link: string; 
    img: string; 
}

function ProjectList() {
    const projects: project[] = []; 
}

function Projects() {
    return (
        <div className='projects'>
            <a href='https://youtu.be/I2aLevbD884'><img src={utmRbt}></img></a>
        </div>
    );
}

export default Projects;