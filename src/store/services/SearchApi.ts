import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../../utils/consts/API";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
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
