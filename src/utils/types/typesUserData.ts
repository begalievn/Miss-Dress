export interface City {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
}

export interface City2 {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
}

export interface Country {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
  cities: City2[];
}

export interface Address {
  city: City;
  country: Country;
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
}

export interface IContactInfo {
  status: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  cityId: number;
  countryId: number;
  address: Address;
  id: number;
  createDate: Date;
  updateDate: Date;
}

export interface ISaveUserData {
  statusCode: number;
  result: IContactInfo;
}
export interface IUserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  cityId: number;
  countryId: number;
}
//запрос с кантри гет олл
export interface IContactInfoGetAll {
  statusCode: number;
  result: IContactInfo[];
}
