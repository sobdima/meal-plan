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
