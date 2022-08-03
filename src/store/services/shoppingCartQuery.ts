import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IShoppingCart } from "../../utils/types/typesShoppingCart";

export const shoppingCartApi = createApi({
  reducerPath: "shoppingCardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
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
    }),
  }),
});
