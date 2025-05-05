import { useEffect, useState } from "react";
import HeroImage from "../assets/images/hero-image.png";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img
          src={HeroImage}
          className="h-full w-full object-cover sm:scale-100 scale-110"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-60" />
      </div>

      <h1 className="text-white text-5xl md:text-7xl font-hatolie z-10">
        frames
      </h1>
    </div>
  );
};

export default Preloader;
