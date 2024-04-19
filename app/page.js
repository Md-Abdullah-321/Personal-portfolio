import About from "./about";
import MyDetails from "./details/details";
import HeroSection from "./heroSection";
import Skills from "./skills/skills";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <MyDetails/>
      <Skills/>
      <div className="h-10 lg:hidden"></div>
    </>
  );
}
