import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CTAButton from "./CTAButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="w-full px-6 md:px-20 xl:px-[300px] py-6 text-white">
      <div className="flex items-center justify-between">
        <div className="font-hatolie font-bold text-4xl">frames</div>

        <div className="hidden lg:flex gap-16 font-bold uppercase text-base items-center">
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
            Portfolio
          </a>
        </div>

        <div className="hidden lg:block">
          <CTAButton
            text="Get in Touch"
            className="text-sm px-6 py-2 flex items-center justify-center"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-sm uppercase font-bold backdrop-blur-lg py-4">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="block px-4"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleScroll(e, "portfolio")}
            className="block px-4"
          >
            Portfolio
          </a>
          <div className="px-4">
            <CTAButton
              text="Get in Touch"
              className="text-sm px-6 py-2 w-full flex items-center justify-center"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
