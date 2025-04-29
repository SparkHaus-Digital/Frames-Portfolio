const CTAButton = ({ text, className = "" }) => {
  return (
    <div>
      <button
        className={`text-white font-monserrat-bold font-semibold uppercase border-white border rounded-[20px] ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default CTAButton;
