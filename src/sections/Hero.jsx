import HeroImage from "../assets/images/hero-image.png";
import CTAButton from "../components/CTAButton";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img
          src={HeroImage}
          className="h-full w-full object-cover"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <Navbar />

      <div className="flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-9xl font-bold font-hatolie">
          Capturing Your Love Story
        </h1>

        <p className="text-5xl font-kugile mb-20">One Moment at a Time</p>

        <CTAButton text="Get in Touch" className="mt-6 px-12 py-4 text-2xl" />
      </div>
    </section>
  );
};

export default Hero;
