import dishesData from '@/data/dishes.json';

function shuffleDishes<T>(array: T[]): T[] {
  const copyArr = array.slice();
  for (let i = copyArr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1)); //random number from 0 to i (inclusive)
    [copyArr[i], copyArr[random]] = [copyArr[random], copyArr[i]];
  }
  return copyArr;
}

export function getRandomDishesId(): string[] {
  const selected = shuffleDishes(dishesData)
    .slice(0, 7)
    .map((dish) => dish.id);

  localStorage.setItem('dishIds', JSON.stringify(selected));
  return selected;
}
