const PortfolioCard = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-[400px] h-[400px] rounded-lg overflow-hidden group">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white rounded-lg">
        <h3 className="text-2xl font-monserrat-bold mb-2 uppercase">{title}</h3>
        <p className="text-xl font-poppins uppercase">{subtitle}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
