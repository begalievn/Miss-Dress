export interface ProductTypes {
  id: number;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  status: string;
  children: ProductTypes[] | [];
}

export interface ImagesType {}

// export interface Child {
//   id: number;
//   status: number;
//   createDate: Date;
//   updateDate: Date;
//   title: string;
//   children: any[];
// }

export interface CategoryTypes {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
  children: CategoryTypes[] | [];
}
