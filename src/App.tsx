import { useState } from 'react';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import '@/utils/dishUtils';
import { getRandomDishesId } from '@/utils/dishUtils';

function App() {
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const handleGenerateIds = () => {
    const dishes = getRandomDishesId();
    setSelectedDishes(dishes);
  };
  console.log(selectedDishes);

  return (
    <>
      <Header generateIds={handleGenerateIds} />
      <Main />
    </>
  );
}

export default App;
