import TextareaAutosize from 'react-textarea-autosize';
import { TextAreaProps } from '../../types/ContainerProps';

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor="origin" className="text-sm font-bold text-gray-600">{label}</label>
            <TextareaAutosize
                id="origin"
                className="border border-gray-300 rounded-lg p-2 resize-none min-h-[100px] max-h-[100px] focus:outline-none"
                value={value}
                onChange={onChange}
                style={{ height: 100 }}
            />
                
                
            </div>
    )
}

export default TextArea;