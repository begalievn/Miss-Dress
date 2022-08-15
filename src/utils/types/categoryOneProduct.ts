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

export interface Result {
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
  images: Image[];
}

export interface RootObject {
  title: RootObject | undefined;
  statusCode: number;
  result: Result;
}
