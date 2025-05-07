import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import HeaderTag from './components/HeaderTag/HeaderTag';
import Contact from './components/Contact/Contact';
import CV from './components/CV/CV';
import Projects from './components/Projects/Projects';

function App() {
  return (
  <div>
    <NavBar />
    <Home />
    <HeaderTag tag={'About Me'}/>


    <HeaderTag tag={'Projects'}/>
    <Projects />

    <HeaderTag tag={'CV'}/>
    <CV />

    <HeaderTag tag={'Gym Schedule'}/>
    <HeaderTag tag={'Contacts'}/>
    <Contact />

  </div>
  );
}

export default App;