import { Iimage } from "./typesShoppingCart";
export interface ICartImageType {
    images:{image:string}[],
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

export interface IProductOrder {
  page: "sending" | "viewing";
  info: IProduct;
  change?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number,
    action: "+" | "-" | "x"
  ) => void;
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
  address: any;
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
  createDate: string;
  updateDate: Date;
}

export interface Iorder {
  statusCode: number;
  result: IResult[];
}
