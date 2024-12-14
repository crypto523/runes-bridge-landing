import React from 'react';

interface ButtonProps {
    children: React.ReactNode; // Allows any valid React node (text, elements, etc.)
    className?: string; // Optional additional styles
    onClick?: () => void; // Optional click handler
}

const RunesButton: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={`flex items-center justify-center gap-[10px] bg-primary p-[10px_20px] rounded-[5px] text-[#FFFFFF] font-conthrax font-[600] text-[16px] leading-[19.2px] ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default RunesButton;