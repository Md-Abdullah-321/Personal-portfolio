import About from "./about";
import Contact from "./contact";
import "./css/Global.css";
import MyDetails from "./details/details";
import HeroSection from "./heroSection";
import Portfolio from "./portfolio";
import Services from "./services";
import Skills from "./skills/skills";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <MyDetails/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
