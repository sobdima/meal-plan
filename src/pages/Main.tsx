import React from 'react';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className="main-content">
      {/* Секция: Меню на неделю */}
      <section className="section-container">
        <div className="section-header">
          <div className="title-group">
            <span className="status-bar green"></span>
            <h2 className="section-title">Menu for the week</h2>
          </div>
          <span className="dish-count">Dishes: 0</span>
        </div>

        <div className="placeholder-container dashed">
          <p className="placeholder-text">
            Click the "Generate" button to create a plan
          </p>
        </div>
      </section>

      {/* Секция: Список покупок */}
      <section className="section-container">
        <div className="section-header">
          <div className="title-group">
            <span className="status-bar yellow"></span>
            <h2 className="section-title">Grocery list</h2>
          </div>
        </div>

        <div className="placeholder-container card">
          <div className="empty-state">
            <svg
              className="shopping-bag-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <p className="empty-state-title">The list is empty.</p>
            <p className="empty-state-subtitle">
              Please confirm the menu first.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
