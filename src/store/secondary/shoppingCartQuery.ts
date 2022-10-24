import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  ICities,
  ICountries,
  IShoppingCart,
} from "../../utils/types/typesShoppingCart";
import {
  IContactInfoGetAll,
  ISaveUserData,
  IUserData,
} from "../../utils/types/typesUserData";

export const shoppingCartApi = createApi({
  reducerPath: "shoppingCardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IShoppingCart, void>({
      query: () => ({
        method: "GET",
        url: "/cart",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      // providesTags: (result) => ["Product"],
    }),
    addProduct: build.mutation<
      IShoppingCart,
      {
        productId: number;
      }
    >({
      query: (body) => ({
        url: "/cart/add",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body: { productId: Number(body.productId) },
      }),
      // invalidatesTags: ["Product"],
    }),
    removeProduct: build.mutation<
      IShoppingCart,
      {
        productId: number;
        cartId: number;
      }
    >({
      query: (body) => ({
        url: "/cart/reduce",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body,
      }),
      // invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation<
      IShoppingCart,
      {
        productId: number;
        cartId: number;
      }
    >({
      query: (body) => ({
        url: "/cart",
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body,
      }),
    }),
    saveUserData: build.mutation<ISaveUserData, IUserData>({
      query: (body) => ({
        url: "/contact-info",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body,
      }),
    }),
    editContactInfo: build.mutation<
      ISaveUserData,
      { id: number; body: IUserData }
    >({
      query: ({ id, body }) => ({
        url: `/contact-info/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body,
      }),
    }),
    placeOrder: build.mutation<
      ISaveUserData,
      { cartId: number; contactInfoId: number }
    >({
      query: (body) => ({
        url: "/order",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body,
      }),
    }),
    getCountries: build.query<ICountries, void>({
      query: () => ({
        url: "/country/get-all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
    }),
    getCities: build.query<ICities, number>({
      query: (id) => ({
        url: `/city/get-by-country/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
    }),
    getAllContactInfo: build.query<IContactInfoGetAll, void>({
      query: () => ({
        url: "/contact-info/all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
    }),
  }),
});
