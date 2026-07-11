import Toggle from "@/components/Toggle";
import Header from "@/components/Header";
import About from "@/components/About";
import News from "@/components/News";
import CurBis from "@/components/CurBis";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifs from "@/components/Certifs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
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
    </>
  );
}
