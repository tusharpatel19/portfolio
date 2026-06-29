const Button = ({ text, primary = true, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        primary
          ? "bg-green-500 text-white hover:bg-green-600 hover:shadow-[0_0_25px_#22c55e]"
          : "border border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;