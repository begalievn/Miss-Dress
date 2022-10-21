import heart from "../../assets/header/heart.svg";
import search from "../../assets/header/search.svg";
import shopping from "../../assets/header/shopping-bag.svg";
import sign from "../../assets/header/sign-in.svg";
import user from "../../assets/header/user.svg";

export const pages = [
  { name: "Каталог", link: "/category", id: 1 },
  { name: "О нас", link: "/about", id: 2 },
  { name: "Доставка", link: "/delivery", id: 3 },
  { name: "Контакты", link: "/contacts", id: 4 },
  // { name: "Новости", link: "/news/1", id: 5 },
];

export const icons = [
  // { url: search, name: "search", id: 1, class: "" },
  { url: heart, name: "heart", id: 2, class: "" },
  { url: shopping, name: "shopping", id: 3, class: "" },
  { url: sign, name: "sign", id: 4, class: "" },
];

export const profileMenu = [
  { name: "Профиль", id: 1 },
  { name: "Заказы", id: 2 },
  { name: "Выйти", id: 3 },
];
