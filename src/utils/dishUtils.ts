import dishes from '@/data/dishes.json';

function shuffleDishes<T>(array: T[]): T[] {
  const copyArr = array.slice();
  //let oldElement;
  for (let i = copyArr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1)); //random number from 0 to i (inclusive)
    /* oldElement = copyArr[i];
    copyArr[i] = copyArr[random];
    copyArr[random] = oldElement; */
    [copyArr[i], copyArr[random]] = [copyArr[random], copyArr[i]];
  }
  return copyArr;
}

export const getRandomDishesId = (): string[] => {
  const selected = shuffleDishes(dishes)
    .slice(0, 7)
    .map((dish) => dish.id);

  localStorage.setItem('selectedDishesId', JSON.stringify(selected));
  return selected;
};

//console.log(getRandomDishes());
