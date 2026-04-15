import { DishCard } from '../../Cards/DishCard/DishCard';
import Placeholder from '../../Placeholder/Placeholder';
import dishesData from '@/data/dishes.json';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function MenuContent({ dishIds }: { dishIds: string[] }) {
  if (dishIds.length === 0) {
    return (
      <Placeholder variant="dashed">
        <p className="placeholder-text">
          Click the "Generate" button to create a plan
        </p>
      </Placeholder>
    );
  }

  return dishIds.map((dishId, index) => {
    const dish = dishesData.find((d) => d.id === dishId);
    if (!dish) return null;

    return (
      <DishCard
        key={dishId}
        day={DAYS_OF_WEEK[index]}
        dishTitle={dish.name}
        amount={dish.ingredients.length}
      />
    );
  });
}
