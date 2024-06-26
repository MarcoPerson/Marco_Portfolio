import { useContext, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursus from "./components/Cursus";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Toggle from "./components/Toggle";
import CurBis from "./components/CurBis";
import Certifs from "./components/Certifs";
import { ThemeContext } from "./darkcontext";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { clarity } from "react-microsoft-clarity";

function App() {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    clarity.init("gd67juaw60");
  }, [])
  
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

<link rel="canonical" href="https://marco-portfolio.vercel.app"/>

          <meta name="author" content="Merveilles AGBETI-MESSAN" />
          <meta name="keywords" content="portfolio, merveilles, agbeti-messan, agbeti, epe-nsin, marco, komlan, merveilles agbeti-messan, insa, insa toulouse, computer science, software engineer, marco portfolio" />
          <meta property="og:locale" content="en_US"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Merveilles AGBETI-MESSAN - Portfolio" />
          <meta property="og:description" content="Personal Portfolio Website for Merveilles AGBETI-MESSAN, a Computer Science Student at INSA Toulouse." />
          <meta property="og:url" content="https://marco-portfolio.vercel.app" />
          <meta property="og:site_name" content="Merveilles AGBETI-MESSAN"/>
          <meta property="og:image" content="https://marco-portfolio.vercel.app/image.jpg" />
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:image:type" content="image/jpeg"/>

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://marco-portfolio.vercel.app/image.jpg" />
          <meta name="twitter:url" content="https://marco-portfolio.vercel.app" />
          <meta name="twitter:title" content="Merveilles AGBETI-MESSAN - Portfolio" />
          <meta name="twitter:description" content="Personal Portfolio Website for Merveilles AGBETI-MESSAN, a Computer Science Student at INSA Toulouse." />

          <link rel="shortlink" href="https://marco-portfolio.vercel.app"/>
        </Helmet>
        <Toggle />
        <Header />
        <About />
        <CurBis />
        <Projects />
        <Skills />
        <Certifs />
        <Contact />
      </div>
    </HelmetProvider>
  );
}

export default App;
