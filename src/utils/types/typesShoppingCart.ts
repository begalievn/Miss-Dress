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
