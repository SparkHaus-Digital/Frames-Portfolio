import ArrowIcon from "../assets/images/arrow.svg";
import LazyImage from "./LazyImage";

const PortfolioCard = ({ title, subtitle, image, placeholder }) => {
  return (
    <div className="relative w-full aspect-square overflow-hidden group rounded-lg">
      

      <LazyImage src={image} placeholder={placeholder} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-lg"  />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white rounded-lg">
        <h3 className="text-xs sm:text-2xl font-monserrat-bold mb-1 uppercase transform transition-all duration-500 translate-x-[-50%] opacity-0  group-hover:translate-x-0 group-hover:opacity-100">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xl font-poppins uppercase mb-4 md:mb-8 transform transition-all duration-500 translate-x-[50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          {subtitle}
        </p>
        <img src={ArrowIcon} alt="arrow icon" className="h-2 md:h-3 transform transition-all duration-500 translate-x-[-50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default PortfolioCard;
