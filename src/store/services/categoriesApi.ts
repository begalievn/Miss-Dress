import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CategoryTypes } from "../../utils/types/types";

export interface CategoryQueryTypes {
  status: number;
  result: CategoryTypes[];
}

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["categories"],
  endpoints: (build) => ({
    fetchCateggories: build.query<CategoryQueryTypes, any>({
      query: (collection) => ({
        url: `/product/categories/${collection}`,
      }),
      transformResponse: (response: any) => response.result,
      providesTags: ["categories"],
    }),
  }),
});
