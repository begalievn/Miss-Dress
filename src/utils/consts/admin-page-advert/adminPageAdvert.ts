

import { IAdvertContent } from "../../types/typesAdminAdvert";

import { 
  advertImageFive, 
  advertImageFour, 
  advertImageOne, 
  advertImageSix, 
  advertImageThree, 
  advertImageTwo } from "../../../assets/adminPage/adminPageIcons";


export const advertContentLeft:IAdvertContent[] = [
  {
    upperTitle: "Архив рекламы",
    title: "Реклама авиакомпании",
    text: "Запустить",
    image: advertImageOne,
    edit: "Редактировать",
  },
  {
    upperTitle: "Архив рекламы",
    title: "Реклама тренажерного зала",
    text: "Запустить",
    image: advertImageTwo,
    edit: "Редактировать",
  },
  {
    upperTitle: "Архив рекламы",
    title: "Реклама ежедневников",
    text: "Запустить",
    image: advertImageThree,
    edit: "Редактировать",
  },
  {
    upperTitle: "Архив рекламы",
    title: "Реклама дизайн курсов",
    text: "Запустить",
    image: advertImageFour,
    edit: "Редактировать",
  },
];
      
export const advertContentRight:IAdvertContent[] = [
  {
    upperTitle: "Транслирующаяся реклама",
    title: "Реклама книжного магазина",
    text: "Остановить",
    image: advertImageFive,
    edit: "Редактировать",
  },
  {
    upperTitle: "Реклама на очереди",
    title: "Реклама парфюмерного магазина",
    text: "Вернуть в архив",
    image: advertImageSix,
    edit: "Редактировать",
  },
];