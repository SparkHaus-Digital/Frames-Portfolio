import { albums } from "../constants";
import PortfolioCard from "../components/PortfolioCard";
import Carousel from "./Carousel";

const Portfolio = () => {
  return (
    <section
      className="md:px-16 lg:px-[100px] py-8 md:py-16"
      id="portfolio"
    >
      <h2 className="px-4 text-[42px] sm:text-4xl md:text-5xl lg:text-6xl font-kugile mb-2 md:mb-[40px] text-left md:text-center">
        Portfolio
      </h2>

      <div className="block sm:hidden">
        <Carousel />
      </div>

      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {albums.map((album) => (
          <PortfolioCard
            key={album.id}
            title={album.title}
            subtitle={album.subtitle}
            image={album.image}
            placeholder={album.placeholder}

          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
