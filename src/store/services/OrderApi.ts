import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://discoverystudio.xyz:4343/api/"}),
  endpoints: (build) => ({
    fetchAllOrder: build.query({
      query: () => ({
        url: "/order",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      })
    }),
    fetchOrderById: build.query({
      query: (id) => ({
        url: `/order/${id}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      })
    })
  })
});

