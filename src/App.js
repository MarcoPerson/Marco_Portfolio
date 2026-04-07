import { useContext, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Toggle from "./components/Toggle";
import CurBis from "./components/CurBis";
import Certifs from "./components/Certifs";
import News from "./components/News";
import Research from "./components/Research";
import { ThemeContext } from "./darkcontext";
import { useContent } from "./hooks/useContent";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { clarity } from "react-microsoft-clarity";

function App() {
  const theme = useContext(ThemeContext);
  const content = useContent();
  const { meta } = content;

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
          <title>{meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />

<link rel="canonical" href={meta.url}/>

          <meta name="author" content={meta.author} />
          <meta name="keywords" content={meta.keywords} />
          <meta property="og:locale" content="en_US"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={meta.ogTitle} />
          <meta property="og:description" content={meta.ogDescription} />
          <meta property="og:url" content={meta.url} />
          <meta property="og:site_name" content={meta.siteName}/>
          <meta property="og:image" content={meta.ogImage} />
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:image:type" content="image/jpeg"/>

          <meta name="twitter:card" content={meta.twitterCard} />
          <meta name="twitter:image" content={meta.ogImage} />
          <meta name="twitter:url" content={meta.url} />
          <meta name="twitter:title" content={meta.ogTitle} />
          <meta name="twitter:description" content={meta.ogDescription} />

          <link rel="shortlink" href={meta.url}/>
        </Helmet>
        <Toggle />
        <Header />
        <About />
        <News />
        <CurBis />
        <Research />
        <Projects />
        <Skills />
        <Certifs />
        <Contact />
      </div>
    </HelmetProvider>
  );
}

export default App;
