function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
    >
      {children}
    </button>
  );
}

export default Button;
