import About from "./about";
import Contact from "./contact";
import MyDetails from "./details/details";
import HeroSection from "./heroSection";
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
      <Contact/>
    </>
  );
}
