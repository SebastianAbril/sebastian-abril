import { useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { MainScreen } from './screens/MainScreen/MainScreen';
import { AboutMeScreen } from './screens/AboutMeScreen/AboutMeScreen';
import { ProjectsScreen } from './screens/ProjectsScreen/ProjectsScreen';
import { DonationsScreen } from './screens/DonationsScreen/DonationsScreen';

function App() {
  const main = useRef(null);
  /*  const projects = useRef(null);
  const aboutMe = useRef(null); */
  const donations = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header />
      <button>Hola</button>
      <button onClick={() => scrollToSection(donations)}>Donaciones</button>
      <MainScreen ref={main} />
      <ProjectsScreen />
      <AboutMeScreen />
      <DonationsScreen />
      <div ref={donations}>DONACIONES</div>
    </div>
  );
}

export default App;
