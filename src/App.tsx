import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import HeaderTag from './components/HeaderTag/HeaderTag';
import Contact from './components/Contact/Contact';
import CV from './components/CV/CV';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import GymDay from './components/GymSchedule/GymDay';
import workouts from './components/GymSchedule/Workout';

interface Workout {
  day: string, 
  wo_style: string 
  detailed_wo: string[]
}

function App() {
  
  return (
  <div>
    <NavBar />
    <Home />
    <HeaderTag tag={'About Me'}/>
    <AboutMe />


    <HeaderTag tag={'Projects'}/>
    <Projects />

    <HeaderTag tag={'CV'}/>
    <CV />

    <HeaderTag tag={'Gym Schedule'}/>
    <div className="gym">
      {workouts.map((workout: Workout)=>{
        return (<div>
          <GymDay day={workout.day} wo_style={workout.wo_style} detailed_wo={workout.detailed_wo} />
        </div>);
      })}

    </div>
    <HeaderTag tag={'Contact'}/>
    <Contact />

  </div>
  );
}

export default App;