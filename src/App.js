import { useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { MainScreen } from './screens/MainScreen/MainScreen';
import { AboutMeScreen } from './screens/AboutMeScreen/AboutMeScreen';
import { ProjectsScreen } from './screens/ProjectsScreen/ProjectsScreen';
import { DonationsScreen } from './screens/DonationsScreen/DonationsScreen';

function App() {
  /*  const projects = useRef(null);
  const aboutMe = useRef(null); */
  const main = useRef(null);
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
      <button onClick={() => scrollToSection(main)}>Hola</button>
      <button onClick={() => scrollToSection(donations)}>Donaciones</button>
      <MainScreen ref={main} />
      <ProjectsScreen />
      <div ref={main}>THE MAINNNNNN</div>
      <AboutMeScreen />
      <DonationsScreen ref={donations} />
      <div ref={donations}> DONATELOOOOO</div>
    </div>
  );
}

export default App;
