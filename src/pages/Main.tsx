import './Main.css';
import { Section } from '@/components/Section/Section';
import Placeholder from '@/components/Placeholder/Placeholder';
import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';
import { DishCard } from '@/components/DishCard/DishCard';
import type { Dish } from '@/types/dish';
import dishesData from '@/data/dishes.json';

interface MainProps {
  dishes: string[];
}

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const allDishes = dishesData as Dish[];

function Main({ dishes }: MainProps) {
  return (
    <main className="main-content">
      <Section
        sectionType="menu"
        title="Menu for the week"
        indicatorColor="green"
        rightElement={
          <span className="dish-count">Dishes: {dishes.length}</span>
        }
      >
        {dishes.length > 0 ? (
          dishes.map((dishId, index) => {
            const dish = allDishes.find((d) => d.id === dishId);
            if (!dish) return null;

            return (
              <DishCard
                key={dishId}
                day={DAYS_OF_WEEK[index]}
                dishTitle={dish.name}
                amount={dish.ingredients.length}
              />
            );
          })
        ) : (
          <Placeholder variant="dashed">
            <p className="placeholder-text">
              Click the "Generate" button to create a plan
            </p>
          </Placeholder>
        )}
      </Section>

      <Section
        sectionType="grocery-list"
        title="Grocery list"
        indicatorColor="yellow"
      >
        <Placeholder variant="card">
          <div className="empty-state">
            <ShoppingBagIcon />
            <p className="empty-state-title">The list is empty.</p>
            <p className="empty-state-subtitle">
              Please confirm the menu first.
            </p>
          </div>
        </Placeholder>
      </Section>
    </main>
  );
}

export default Main;
