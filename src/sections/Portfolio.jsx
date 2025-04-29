import { albums } from "../constants";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section className="px-[100px] py-20">
      <h2 className="text-6xl font-kugile mb-10 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {albums.map((album) => (
          <PortfolioCard
            key={album.id}
            title={album.title}
            subtitle={album.subtitle}
            image={album.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
