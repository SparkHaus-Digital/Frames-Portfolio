// import { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import CTAButton from "./CTAButton";
// import { gsap } from "gsap";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navbarRef = useRef(null);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     const el = document.getElementById(targetId);
//     if (el) {
//       window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       navbarRef.current,
//       { y: "-100%", opacity: 0 },
//       {
//         y: "0%",
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//       }
//     );
//   }, []);
//   return (
//     <nav ref={navbarRef} className="w-full py-6 text-white">
//       <div className="px-6 flex items-center justify-between md:w-[50%] mx-auto">
//         <div className="font-hatolie font-bold text-4xl">frames</div>

//         <div className="hidden lg:flex md:space-x-10 font-bold uppercase text-base tracking-widest">
//           <a href="#about" onClick={(e) => handleScroll(e, "about")}>
//             About
//           </a>
//           <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
//             Portfolio
//           </a>
//         </div>

//         <div className="hidden lg:block">
//           <CTAButton
//             text="Get in Touch"
//             className="text-sm px-6 py-2 flex items-center justify-center"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden mt-4 space-y-4 text-sm uppercase font-bold backdrop-blur-lg py-4">
//           <a
//             href="#about"
//             onClick={(e) => handleScroll(e, "about")}
//             className="block px-4"
//           >
//             About
//           </a>
//           <a
//             href="#portfolio"
//             onClick={(e) => handleScroll(e, "portfolio")}
//             className="block px-4"
//           >
//             Portfolio
//           </a>
//           <div className="px-4">
//             <CTAButton
//               text="Get in Touch"
//               className="text-sm px-6 py-2 w-full flex items-center justify-center"
//             />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CTAButton from "./CTAButton";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navbarRef} className="w-full py-6 text-white bg-transparent z-50">
      {/* Desktop */}
      <div className="hidden lg:flex justify-center items-center space-x-24 font-bold text-base tracking-widest">
        <div className="font-hatolie font-bold text-3xl">frames</div>
        <a href="#about" onClick={(e) => handleScroll(e, "about")}>
          ABOUT
        </a>
        <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
          PORTFOLIO
        </a>
        <CTAButton
          text="Get in Touch"
          className="text-sm px-6 py-2 flex items-center justify-center"
        />
      </div>

      {/* Mobile */}
      <div className="lg:hidden px-6 flex items-center justify-between">
        <div className="font-hatolie font-bold text-3xl">frames</div>
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full text-white z-40 text-sm uppercase font-bold backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
            Portfolio
          </a>
          <CTAButton
            text="Get in Touch"
            className="text-sm px-6 py-2 flex items-center justify-center"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
