export interface IChild {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
  children: IChild[] | [];
}

export interface IResult {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
  children: IChild[] | [];
}

export interface IRootObject<T> {
  statusCode: number;
  result: IChild[];
}
