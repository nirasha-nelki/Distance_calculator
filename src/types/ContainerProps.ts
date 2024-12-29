export interface ContainerProps {
    children: React.ReactNode
}

export interface TextAreaProps {
    label: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}