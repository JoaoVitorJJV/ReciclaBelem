import React, { InputHTMLAttributes } from 'react';
import './input.css';

type InputLineProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

const InputLine: React.FC<InputLineProps> = ({ label, ...props }) => {
    return (
        <div className="input-line-container">
            {label && <label className="input-line-label">{label}</label>}
            <input className="input-line" {...props} />
        </div>
    );
};

export default InputLine;
