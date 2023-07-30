const Button = ({ children, type }) => {
    return (
        <button
        type={type === "submit" ? "submit" : "button"}
        className={`shrink-0 px-4 py-2 rounded-full bg-blue-600 text-white font-medium text-xs shadow-grid`}>
            {children}
        </button>
    );
};

export default Button;