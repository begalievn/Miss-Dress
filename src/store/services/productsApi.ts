import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api/",
  }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/product/get-all",
      }),
      providesTags: ["Products"],
    }),
  }),
});
