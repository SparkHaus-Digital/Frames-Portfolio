import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import HeroImage from "../assets/images/hero-image.png";
import CTAButton from "../components/CTAButton";
import Navbar from "../components/Navbar";

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  useEffect(() => {
    if (isInView && hasScrolled) {
      controls.start("visible");
    }
  }, [isInView, hasScrolled, controls]);

  const navbarVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  const titleVariant = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const subtitleVariant = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut", delay: 0.6 } },
  };

  const buttonVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut", delay: 1 } },
  };

  return (
    <section className="relative w-full h-screen text-white" id="home" ref={heroRef}>
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img
          src={HeroImage}
          className="h-full w-full object-cover sm:scale-100 scale-110"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {isInView && (
        <motion.div
          variants={navbarVariant}
          initial="hidden"
          animate={controls}
          className="absolute top-0 left-0 w-full z-10"
        >
          <Navbar />
        </motion.div>
      )}


      <div className="flex flex-col w-full h-full text-center">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.h1
            className="hero-text text-[64px] md:text-8xl font-bold font-hatolie leading-[0.8]"
            variants={titleVariant}
            initial="hidden"
            animate={controls}
          >
            Capturing Your Love Story
          </motion.h1>

          <motion.p
            className="text-base md:text-3xl font-kugile mt-4"
            variants={subtitleVariant}
            initial="hidden"
            animate={controls}
          >
            One Moment at a Time
          </motion.p>
        </div>

        <motion.div
          className="mb-8 flex items-center justify-center w-full"
          variants={buttonVariant}
          initial="hidden"
          animate={controls}
        >
          <div className="mx-auto">
            <CTAButton text="Get in Touch" className="text-sm px-6 py-2 md:px-12 md:py-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
