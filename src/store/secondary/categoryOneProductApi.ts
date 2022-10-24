import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootObject, Result } from "../../utils/types/categoryOneProduct";

export const categoryOneProductApi = createApi({
  reducerPath: "categoryOneProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["categoryOneProductApi"],
  endpoints: (build) => ({
    fetchCategoryOneProductApi: build.query<RootObject | any, Result | any>({
      query: (productID) => ({
        url: `/product/${productID}`,
      }),
      transformResponse: (response: any) => response.result,
      providesTags: ["categoryOneProductApi"],
    }),
  }),
});
