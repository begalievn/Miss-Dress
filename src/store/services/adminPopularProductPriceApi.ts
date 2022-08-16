import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { RootObject,Result } from "../../utils/types/adminPopularProducts";

export const adminPopularProductPriceApi = createApi({
  reducerPath: "adminPopularProductPriceApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://discoverystudio.xyz:4343/api"}),
  endpoints: (build) => ({
    fetchGetPopularProductPrice: build.query<RootObject | any, Result | any> ({
      query: () => ({
        url: "/order/popular-product/price",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      })
    }),
  })
});