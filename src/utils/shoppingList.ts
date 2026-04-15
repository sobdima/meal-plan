/* import type { Dish, ShoppingItem } from '@/types/dish';
import dishesData from '@/data/dishes.json'; */

//ПОЛУЧАЕМ СПИСОК ПОКУПОК
/* export function getShoppingList(): ShoppingItem[] {
  const selectedDishesId = localStorage.getItem('selectedDishesId');

  if (!selectedDishesId) {
    return [];
  }

  const dishIds = JSON.parse(selectedDishesId) as string[];

  // Создаём карту для агрегирования ингредиентов
  const ingredientMap = new Map<string, ShoppingItem>();

  dishIds.forEach((dishId) => {
    const dish = (dishesData as Dish[]).find((d) => d.id === dishId);

    if (dish) {
      dish.ingredients.forEach((ingredient) => {
        // Ключ: "name|unit" (например: "milk|ml")
        const key = `${ingredient.name}|${ingredient.unit}`;

        if (ingredientMap.has(key)) {
          // Суммируем количество для существующего ингредиента
          const existing = ingredientMap.get(key)!;
          existing.totalQuantity += ingredient.quantity;
        } else {
          // Добавляем новый ингредиент
          ingredientMap.set(key, {
            name: ingredient.name,
            totalQuantity: ingredient.quantity,
            unit: ingredient.unit,
            done: false,
          });
        }
      });
    }
  });

  //console.log('array from Map', Array.from(ingredientMap.values()));

  const shoppingListStatus = getShoppingListStatus();

  //console.log('shoppingListStatus', shoppingListStatus['картофель']);

  const shoppingList = Array.from(ingredientMap.values())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => ({ ...item, done: shoppingListStatus[item.name] ?? false }));

  saveShoppingListStatus(shoppingList);

  //console.log('shoppingList', shoppingList);

  return shoppingList;
} */

// ПОЛУЧАЕМ СТАТУСЫ ТОВАРОВ ИЗ localStorage
/* export function getShoppingListStatus(): Record<string, boolean> {
  const status = localStorage.getItem('shoppingListStatus');
  return status ? JSON.parse(status) : {};
} */

// СОХРАНЯЕМ СТАТУСЫ ТОВАРОВ В localStorage
/* export function saveShoppingListStatus(
  shoppingList: ShoppingItem[]
): Record<string, boolean> {
  const status: Record<string, boolean> = {};

  shoppingList.forEach((item) => {
    status[item.name] = item.done;
  });

  localStorage.setItem('shoppingListStatus', JSON.stringify(status));
  return status;
} */

// ОБНОВЛЯЕМ СТАТУС ОДНОГО ТОВАРА
/* export function toggleShoppingItem(itemName: string): void {
  const currentStatus = getShoppingListStatus();
  currentStatus[itemName] = !currentStatus[itemName];
  localStorage.setItem('shoppingListStatus', JSON.stringify(currentStatus));
} */

/* export function clearLocalStorage(): void {
  localStorage.removeItem('selectedDishesId');
  localStorage.removeItem('shoppingListStatus');
} */
