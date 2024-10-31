// Button.js
import { ButtonHTMLAttributes } from 'react';
import './buttonStyle.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

}

function Button({ onClick, children, ...props }: ButtonProps) {
    return (
        <button className="custom-button" onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
