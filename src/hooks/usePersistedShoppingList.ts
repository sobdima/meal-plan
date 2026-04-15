import { useState, useCallback } from 'react';
import { useShoppingList } from './useShoppingList';
import type { ShoppingItem } from '@/types/dish';

const STORAGE_KEY = 'shopping-list';

function loadFromStorage(): ShoppingItem[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ShoppingItem[]) : null;
  } catch {
    return null;
  }
}

export function usePersistedShoppingList(dishIds: string[]) {
  const [persistedItems, setPersistedItems] = useState<ShoppingItem[] | null>(
    () => loadFromStorage()
  );

  const freshItems = useShoppingList(dishIds);

  const confirm = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(freshItems));
    setPersistedItems(freshItems);
  }, [freshItems]);

  const clear = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setPersistedItems(null);
  }, []);

  return { items: persistedItems, confirm, clear };
}
