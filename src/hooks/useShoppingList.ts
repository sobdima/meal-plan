import { useMemo } from 'react';
import dishesData from '@/data/dishes.json';
import type { ShoppingItem } from '@/types/dish';

export function useShoppingList(dishIds: string[]): ShoppingItem[] {
  return useMemo(() => {
    const selectedDishes = dishesData.filter((dish) =>
      dishIds.includes(dish.id)
    );

    // Агрегируем ингредиенты через Map — ключ: "name|unit"
    const map = new Map<string, ShoppingItem>();

    for (const dish of selectedDishes) {
      for (const ingredient of dish.ingredients) {
        const key = `${ingredient.name}|${ingredient.unit}`;
        const existing = map.get(key);

        if (existing) {
          existing.quantity += ingredient.quantity;
        } else {
          map.set(key, { ...ingredient });
        }
      }
    }

    return Array.from(map.values());
  }, [dishIds]);
}
