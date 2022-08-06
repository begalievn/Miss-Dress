import { Iimage } from "./typesShoppingCart";

export interface ICartType {
  id: number;
  images: { image: string }[];
  status: string;
  date: string;
  price: number;
}

// НИЖЕ ТИПИЗАЦИЯ ДЛЯ ОРДЕР
export interface IProductInner {
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
  product: IProductInner;
}

export interface ICart {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  amount: number;
  price: number;
  proceedStatus: number;
  products: IProduct[];
}

export interface ContactInfo {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IUser {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}

export interface IResult {
  cart: ICart;
  contactInfo: ContactInfo;
  user: IUser;
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
}

export interface Iorder {
  statusCode: number;
  result: IResult;
}
