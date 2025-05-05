import HeroImage from "../assets/images/hero-image.png";
import CTAButton from "../components/CTAButton";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white" id="home">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img
          src={HeroImage}
          className="h-full w-full object-cover sm:scale-100 scale-110"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-linear-39 from-black to-black opacity-60"></div>
      </div>

      <Navbar />

      <div className="flex flex-col w-full h-full text-center">
        <div className="flex-1 flex flex-col items-center justify-center ">
          <h1 className="text-[64px] md:text-8xl font-bold font-hatolie leading-[0.8]">
            Capturing Your Love Story
          </h1>

          <p className="text-base md:text-3xl font-kugile mt-4">One Moment at a Time</p>
        </div>

        <div className="mb-32 flex justify-center">
          <CTAButton text="Get in Touch" className="text-sm px-10 py-3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
