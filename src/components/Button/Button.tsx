import './Button.css';

interface ButtonProps {
  text: string;
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
