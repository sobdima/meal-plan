import type React from 'react';
import './Button.css';

interface ButtonProps {
  /* text: string; */
  text: React.ReactNode;
  onClick: () => void;
  className?: string;
  id?: string;
}

export function Button({ text, onClick, className, id }: ButtonProps) {
  return (
    <button onClick={onClick} className={className} id={id}>
      {text}
    </button>
  );
}
