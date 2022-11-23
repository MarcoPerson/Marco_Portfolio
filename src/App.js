import { useContext } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursus from "./components/Cursus";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Toggle from "./components/Toggle";
import CurBis from "./components/CurBis";
import { ThemeContext } from "./darkcontext";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <HelmetProvider>
      <div
        className="App"
        style={{
          backgroundColor: theme.state.darkMode ? "#222" : "white",
          color: theme.state.darkMode ? "white" : "black",
        }}
      >
        <Helmet>
          <title>Merveilles AGBETI-MESSAN - Computer Science Student</title>
          <meta
            name="description"
            content="Personal website of Merveilles AGBETI-MESSAN"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Merveilles AGBETI-MESSAN - Portfolio" />
          <meta property="og:image" content="https://marco-portfolio.vercel.app/image.png" />
          <meta property="og:url" content="https://marco-portfolio.vercel.app" />
          <meta property="og:description" content="Personal Portfolio Website for Merveilles AGBETI-MESSAN, a Computer Science Student at INSA Toulouse." />

          <meta name="twitter:creator" content="Merveilles AGBETI-MESSAN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://marco-portfolio.vercel.app/image.png" />
          <meta name="twitter:url" content="https://marco-portfolio.vercel.app" />
          <meta name="twitter:title" content="Merveilles AGBETI-MESSAN - Portfolio" />
          <meta name="twitter:description" content="Personal Portfolio Website for Merveilles AGBETI-MESSAN, a Computer Science Student at INSA Toulouse." />
        </Helmet>
        <Toggle />
        <Header />
        <About />
        <CurBis />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </HelmetProvider>
  );
}

export default App;
