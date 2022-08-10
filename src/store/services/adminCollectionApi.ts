import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const adminCollectionApi = createApi({
  reducerPath: "adminCollectionApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://discoverystudio.xyz:4343/api"}),
  endpoints: (build) => ({
    getProductByCollection: build.query({
      query: (collection) => ({
        url: `/product-statistic/get-product-by-collection/${collection}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      })
    }),
    // fetchOrderById: build.query<Iorder, string>({
    //   query: (id) => ({
    //     url: `/order/${id}`,
    //     headers: {
    //       Authorization: `Bearer ${JSON.parse(
    //         localStorage.getItem("accessToken") || "{}"
    //       )}`,
    //     },
    //   })
    // })
  })
});