import { Button } from '@/components/Button/Button';

export function Header() {
  const handleGenerate = () => {
    console.log('Генерируем план питания!');
  };

  const handleAdd = () => {
    console.log('Добавляем новый элемент!');
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            /* className="h-6 w-6" */
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            ></path>
          </svg>
          MealPlan
        </h1>
      </div>

      <div className="header-buttons">
        <Button
          text="Generate"
          onClick={handleGenerate}
          className="btn-generate"
        />
        <Button text="+" onClick={handleAdd} className="btn-add" />
      </div>
    </header>
  );
}
