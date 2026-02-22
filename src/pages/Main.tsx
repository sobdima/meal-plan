import React from 'react';
import './Main.css';
import Section from '@/components/Section/Section';
import Placeholder from '@/components/Placeholder/Placeholder';
import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <Section
        title="Menu for the week"
        indicatorColor="green"
        rightElement={<span className="dish-count">Dishes: 0</span>}
      >
        <Placeholder variant="dashed">
          <p className="placeholder-text">
            Click the "Generate" button to create a plan
          </p>
        </Placeholder>
      </Section>

      <Section title="Grocery list" indicatorColor="yellow">
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
};

export default Main;
