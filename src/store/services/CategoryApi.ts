import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IChild, IRootObject } from "../../utils/types/typesCategory";

export const CategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  endpoints: (build) => ({
    fetchAllCategory: build.query<IChild[], any>({
      query: () => ({
        url: "/category",
      }),
      transformResponse: (response: IRootObject<IChild>) => response.result,
    }),
  }),
});

export const { useFetchAllCategoryQuery } = CategoryApi;
