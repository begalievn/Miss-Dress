import { CategoryTypes } from "../types/types";

export function getNestedCategories(
  categories: CategoryTypes[]
): CategoryTypes[] {
  const result: CategoryTypes[] = [];

  function dig(categories: CategoryTypes[]) {
    categories.forEach((item) => {
      console.log(item);

      if (item.children.length > 0) {
        console.log("Закончить");
        return item.children;
      } else {
        console.log("Продолжить");
        return result.push(item);
      }
    });
  }

  dig(categories);
  // console.log(result);
  return result;
}
