import './DishCard.css';

interface DishCardProps {
  day: string;
  dishTitle: string;
  amount: number;
}

export function DishCard({ day, dishTitle, amount }: DishCardProps) {
  return (
    <div className="dish-card">
      <div>
        <div className="day-label">{day}</div>
        <h3>{dishTitle}</h3>
      </div>
      <div className="dish-actions">
        <div className="ingredients-count">{amount} ingredients</div>
        <div className="replace-select">another dish</div>
      </div>
    </div>
  );
}
