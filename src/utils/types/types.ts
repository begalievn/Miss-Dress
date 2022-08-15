export interface IAdmin {
  title: string;
  image: any;
  route: string;
}

export interface IBlock {
  value: string;
  text: string;
}

export interface IFavBlock {
  title: string;
  name: string;
  sales: string | number;
  income: string | number;
}

export interface IFavorites {
  name: string;
  price: number;
  colors: number;
  size: number;
  id: number;
  rate: number;
}

interface Images {
  contentSize: number;
  contentType: string;
  createDate: string;
  fileKey: string;
  id: number;
  name: string;
  status: number;
  updateDate: string;
  url: string;
}
export interface ProductTest {
  id: number;
  title: string;
  price: number;
  discount: number;
  rate: number;
  image: Images[] | [];
  status: number;
}
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
  category_id: number | null | undefined;
  status: number;
  category_title: string;
  // createDate: Date;
  // updateDate: Date;
  children: CategoryTypes[] | [];
}
