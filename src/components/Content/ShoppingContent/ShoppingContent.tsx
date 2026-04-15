import { ShoppingCard } from '../../Cards/ShoppingCard/ShoppingCard';
import Placeholder from '../../Placeholder/Placeholder';
import ShoppingBagIcon from '../../Icons/ShoppingBagIcon';
import type { ShoppingItem } from '@/types/dish';

interface ShoppingListProps {
  items: ShoppingItem[] | null;
}

export function ShoppingContent({ items }: ShoppingListProps) {
  if (!items || items.length === 0) {
    return (
      <Placeholder variant="card">
        <div className="empty-state">
          <ShoppingBagIcon />
          <p className="empty-state-title">The list is empty.</p>
          <p className="empty-state-subtitle">Please confirm the menu first.</p>
        </div>
      </Placeholder>
    );
  }

  return (
    <div className="ingredient-list">
      {items.map((item) => (
        <ShoppingCard
          key={`${item.name}|${item.unit}`}
          item={item}
          onToggle={() => alert('Puka')}
        />
      ))}
    </div>
  );
}
