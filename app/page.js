import About from "./about";
import MyDetails from "./details/details";
import HeroSection from "./heroSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <MyDetails/>
      <div className="h-10 lg:hidden"></div>
    </>
  );
}
