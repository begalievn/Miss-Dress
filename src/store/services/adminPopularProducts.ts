import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { RootObject,Result } from "../../utils/types/adminPopularProducts";

export const adminPopularProductsApi = createApi({
  reducerPath: "adminPopularProductApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://discoverystudio.xyz:4343/api"}),
  endpoints: (build) => ({
    fetchGetPopularProduct: build.query<RootObject|any, Result|any>({
      query: (Data) => ({
        url: `/order/all?page=${Data.counte}&take=${Data.limit}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      })
    }),
  })
});