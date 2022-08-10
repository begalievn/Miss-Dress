export interface IResult {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}

export interface IRootObject {
  statusCode: number;
  result: IResult;
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}
