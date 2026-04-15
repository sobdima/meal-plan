import { Section } from '@/components/Section/Section';
import './Main.css';
import { Button } from '@/components/Button/Button';
import { MenuContent } from '@/components/Content/MenuContent/MenuContent';
import { ShoppingContent } from '@/components/Content/ShoppingContent/ShoppingContent';
import { usePersistedShoppingList } from '@/hooks/usePersistedShoppingList';

interface MainProps {
  dishIds: string[];
}

export function Main({ dishIds }: MainProps) {
  const hasDishes = dishIds.length > 0;
  const { items, confirm } = usePersistedShoppingList(dishIds);

  return (
    <main className="main-content">
      <Section
        sectionType="menu"
        title="Menu for the week"
        indicatorColor="green"
        rightElement={
          <span className="dish-count">Dishes: {dishIds.length}</span>
        }
        bottomElement={
          hasDishes && (
            <Button
              text="Create a shopping list"
              className="btn-create"
              onClick={() => confirm()}
            />
          )
        }
      >
        <MenuContent dishIds={dishIds} />
      </Section>

      <Section
        sectionType="shopping-list"
        title="Shopping List"
        indicatorColor="yellow"
      >
        <ShoppingContent items={items} />
      </Section>
    </main>
  );
}
