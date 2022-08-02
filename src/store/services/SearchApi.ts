import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  endpoints: (build) => ({
    fetchSearch: build.query({
      query: (name) => ({
        url: `/product/get-all?name=${name}`,
      }),
    }),
  }),
});

export const { useFetchSearchQuery } = searchApi;
