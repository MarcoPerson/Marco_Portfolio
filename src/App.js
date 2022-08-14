import { useContext } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Cursus from './components/Cursus';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Toggle from './components/Toggle';
import { ThemeContext } from './darkcontext';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className="App" style={{backgroundColor: theme.state.darkMode ? "#222" : "white", color: theme.state.darkMode ? "white" : "black"}}>
      <Toggle />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Cursus />
      <Contact />
    </div>
  );
}

export default App;
