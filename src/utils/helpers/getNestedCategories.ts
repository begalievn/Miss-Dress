import { CategoryTypes } from "../types/types";

export function getNestedCategories(
  categories: CategoryTypes[]
): CategoryTypes[] {
  const result: CategoryTypes[] = [];
  function dig(categories: CategoryTypes[]) {
    categories.forEach((item) => {
      if (item.children.length > 0) {
        // console.log("STOP recursion");
        dig(item.children);
        if (item.children) {
        }
      } else {
        result.push(item);
      }
    });
  }

  dig(categories);
  // console.log(result);
  return result;
}
