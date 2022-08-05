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
  product: IProductCurrent;
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