import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import HeaderTag from './components/HeaderTag/HeaderTag';
import Contact from './components/Contact/Contact';
import CV from './components/CV/CV';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import GymDay from './components/GymSchedule/GymDay';

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
      <GymDay wo_style='push' day='mon' detailed_wo={['3x12 pull ups', 'worl']}/>
      <GymDay wo_style='push' day='mon' detailed_wo={['helo', '3x5 dips']}/>
      <GymDay wo_style='push' day='mon' detailed_wo={['-1x1 squat', 'worl']}/>

    </div>
    <HeaderTag tag={'Contact'}/>
    <Contact />

  </div>
  );
}

export default App;