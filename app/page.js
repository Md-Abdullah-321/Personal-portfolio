import About from "./about";
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
      <div className="h-10 lg:hidden"></div>
    </>
  );
}
