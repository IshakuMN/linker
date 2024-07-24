import Image from "next/image";
import HeroText from "./heroText.jsx";
import HeroCards from "./heroCards.jsx";
import HeroImage from "./heroImage.jsx";

const Hero = () => {
  return (
    <section className="lg:flex md:flex-row flex-col gap-x-4 max-w-7xl mx-auto border-2 ">
      <div className="lg:border-[1.5px] lg:h-[842px]   lg:py-14 lg:px-[44px] border-stone-300 rounded-[32px]">
        <HeroText />
        <hr className="border-stone-300 w-full my-12 hidden lg:block" />
        <div className="hidden lg:block">
          {" "}
          <HeroCards />
        </div>
      </div>

      <HeroImage />
      <div className="lg:hidden">
        <HeroCards />
      </div>
    </section>
  );
};

export default Hero;
