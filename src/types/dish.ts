export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface Dish {
  id: string;
  name: string;
  ingredients: Ingredient[];
}

export interface ShoppingItem {
  name: string;
  quantity: number;
  unit: string;
  done?: boolean;
}
