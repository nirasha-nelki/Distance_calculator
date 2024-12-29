import { ContainerProps } from "../../types/ContainerProps";

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="bg-white w-3/4 h-3/4 flex flex-col  items-center rounded-lg shadow-lg p-4">
            {children}
        </div>
    );
}

export default Container;