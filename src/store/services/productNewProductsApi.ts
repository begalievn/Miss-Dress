import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newProductsApi = createApi({
  reducerPath: "newProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getNewProducts: build.query({
      query: (Data: any) => ({
        url: `/product/get-all?page=${Data.counte}&take=${Data.limit}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        }
      }),
      providesTags: ["Products"],
    }),
  }),
});