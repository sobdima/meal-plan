import './ShoppingCard.css';
import type { ShoppingItem } from '@/types/dish';

interface ShoppingCardProps {
  item: ShoppingItem;
  onToggle: (itemName: string) => void;
}

export function ShoppingCard({ item, onToggle }: ShoppingCardProps) {
  return (
    <div className={`grocery-card ${item.done ? 'done' : ''}`}>
      <div className="grocery-content">
        <h4 className="grocery-name">{item.name}</h4>
        <p className="grocery-quantity">
          {item.quantity}
          <span className="grocery-unit">{item.unit}</span>
        </p>
      </div>
      <div className="grocery-checkbox">
        <input
          type="checkbox"
          id={`item-${item.name}`}
          checked={item.done}
          onChange={() => onToggle(item.name)}
        />
        <label htmlFor={`item-${item.name}`}></label>
      </div>
    </div>
  );
}
