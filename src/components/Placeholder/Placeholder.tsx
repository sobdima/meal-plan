import type { ReactNode } from 'react';

interface PlaceholderProps {
  variant: 'dashed' | 'card';
  children: ReactNode;
}

const Placeholder: React.FC<PlaceholderProps> = ({ variant, children }) => (
  <div className={`placeholder-container ${variant}`}>{children}</div>
);

export default Placeholder;
