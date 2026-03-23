import { useState } from 'react';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import '@/utils/dishUtils';
import { getRandomDishesId } from '@/utils/dishUtils';

function App() {
  const [selectedDishes, setSelectedDishes] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('selectedDishesId');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Ошибка парсинга:', e);
      return [];
    }
  });

  const handleGenerateIds = () => {
    const dishes = getRandomDishesId();
    setSelectedDishes(dishes);
  };

  return (
    <>
      <Header generateIds={handleGenerateIds} />
      <Main dishes={selectedDishes} />
    </>
  );
}

export default App;
