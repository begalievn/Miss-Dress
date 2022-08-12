import { 
  autumnCollection,
  winterCollection,
  springCollection,
  summerCollection
} from "../../../assets/adminPage/adminPageIcons";

import { IAdminCollection } from "../../types/typesAdminCollection";

export const adminCollectionProducts:IAdminCollection[] = [
  {
    id: 1,
    title: "Зимняя коллекция",
    editTitle: "Редактировать",
    image: {image: winterCollection},
    path:"winter",
  },
  {
    id: 2,
    title: "Весенняя коллекция",
    editTitle: "Редактировать",
    image: {image: springCollection},
    path:"spring",
  
  },
  {
    id: 3,
    title: "Летняя коллекция",
    editTitle: "Редактировать",
    image: {image: summerCollection},
    path:"summer",
  
  },
  {
    id: 4,
    title: "Осенняя коллекция",
    editTitle: "Редактировать",
    image: {image: autumnCollection},
    path:"autumn",
  },
];