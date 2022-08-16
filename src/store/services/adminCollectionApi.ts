import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const adminCollectionApi = createApi({
  reducerPath: "adminCollectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://discoverystudio.xyz:4343/api" }),
  endpoints: (build) => ({
    getProductByCollection: build.query({
      query: ({ collection, Data }) => ({
        url: `/product-statistic/get-product-by-collection/${collection}?page=${Data.counte}&take=${Data.limit}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
    }),
  }),
});
