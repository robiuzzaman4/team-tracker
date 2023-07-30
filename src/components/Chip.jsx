const Chip = ({ children }) => {
    return (
        <div className="w-fit mx-auto px-4 py-2 bg-blue-200/50 text-blue-600 text-xs font-medium rounded-full">
            {children}
        </div>
    );
};

export default Chip;