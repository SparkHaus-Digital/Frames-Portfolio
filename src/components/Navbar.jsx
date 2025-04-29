import CTAButton from "./CTAButton";

function Navbar() {
  return (
    <nav className="w-full px-[100px] py-6 text-white">
      <div className="max-w-[1030px] mx-auto flex items-center justify-between">
        <div className="font-hatolie font-bold text-4xl">frames</div>

        <div className="flex gap-16 font-monserrat-bold font-bold uppercase text-base">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </div>

        <CTAButton text="Get in Touch" className="text-sm px-6 py-2" />
      </div>
    </nav>
  );
}

export default Navbar;
