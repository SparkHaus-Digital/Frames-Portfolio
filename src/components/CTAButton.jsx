const CTAButton = ({ text, className = "" }) => {
  return (
    <button
      className={`text-white font-semibold uppercase border-white border rounded-[20px] hover:bg-white hover:text-black hover:duration-700 hover:ease-out ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;
