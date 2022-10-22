const headerExceptions = [
  "admin",
  "dashboard",
  "users",
  "goods",
  "sales",
  "ad",
  "chat",
  "shoppingBag",
  "authorization",
  "authors",
  "news",
  "books"
];

export const useExcept = (path: string) =>
  !headerExceptions.includes(path.split("/")[1]);
