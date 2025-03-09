import React from 'react';
import { BottomProps } from '../../types';

const Button: React.FC<BottomProps> = ({ color, width, text,className}) => {
    const getColor = () => {
        switch (color) {
            case "--primary-color":
                return "var(--primary-color)";
            case "--secondary-color":
                return "var(--secondary-color)";
            case "white":
                return "white";
            default:
                return "transparent";
        }
    };

    const getWidth = () => {
        switch (width) {
            case "large":
                return "200px";
            case "medium":
                return "150px";
            case "small":
                return "100px";
            default:
                return "150px";
        }
    };

    return (
        <button className={`rounded-full py-2 duration-200 cursor-pointer text-lg shadow-md ${className}`} style={{ backgroundColor: getColor(), width: getWidth() }}>
            {text}
        </button>
    );
};

export default Button;