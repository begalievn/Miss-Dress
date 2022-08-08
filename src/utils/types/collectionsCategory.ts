export interface Category {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
}

export interface Image {
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

export interface Datum {
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
  category?: Category;
  images: Image[];
}

export interface Result {
  data?: Datum[];
}

export interface IParams {
  collection?: string | any;
  id?: number | any;
  name?: string | any;
}

export interface RootObject {
  statusCode: number;
  result: Result;
}
