import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    isPassword?: boolean
}

function Input({ leftIcon, rightIcon, isPassword, ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-group">
            {leftIcon && <span className="input-icon">{leftIcon}</span>}
            <input
                className="custom-input"
                {...props}
            />
            {isPassword && (
                <span className="input-icon-right" onClick={handleTogglePassword}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
            )}
            {!isPassword && rightIcon && (
                <span className="input-icon-right">{rightIcon}</span>
            )}
        </div>
    );
};

export default Input;
