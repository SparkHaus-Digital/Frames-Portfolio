const CTAButton = ({ text, className = "" }) => {
  return (
    <button
      className={`text-white font-semibold uppercase border-white border rounded-[20px] ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;
