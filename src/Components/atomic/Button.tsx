interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-auto" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;