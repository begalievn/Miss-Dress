import { IProductInner } from "./typesOrder";

export interface IProductCurrent {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  discount?: any;
  images?: Iimage[];
}

export interface IProduct {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  totalCount: number;
  amount: number;
  product: IProductCurrent | IProductInner;
}

export interface IResult {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  amount: number;
  price: number;
  proceedStatus: number;
  products: IProduct[];
}

export interface IShoppingCart {
  statusCode: number;
  result: IResult;
}
export interface IData {
  data: IShoppingCart;
}
//ВЫШЕ ТИПИЗАЦИЯ ДЛЯ КАРТ

// ОБЩАЯ КАРТИНКА
export interface Iimage {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  name: string;
  fileKey: string;
  contentSize: number;
  contentType: string;
  url: string;
}

// ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
export interface IUserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  cityId: number;
  countryId: number;
}

// ВСЕ СТРАНЫ

export interface ICountry {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
}

export interface ICountries {
  statusCode: number;
  result: ICountry[];
}

// ВСЕ ГОРОДА

export interface ICity {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
}

export interface ICities {
  statusCode: number;
  result: ICity[];
}
