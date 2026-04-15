import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main';
import '@/utils/dishIdsUtils';

export function App() {
  const [dishIds, setDishIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dishIds');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Parsing error:', e);
      return [];
    }
  });

  return (
    <>
      <Header onGenerate={setDishIds} onClear={() => setDishIds([])} />
      <Main dishIds={dishIds} />
    </>
  );
}
