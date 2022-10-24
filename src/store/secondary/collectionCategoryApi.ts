import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IParams,
  Result,
  RootObject,
} from "../../utils/types/collectionsCategory";

export const collectionCategoryApi = createApi({
  reducerPath: "collectionCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["collectionCategory"],
  endpoints: (build) => ({
    fetchCollectionCategory: build.query<RootObject | any, IParams>({
      query: (Data) => ({
        url: `/product/get-all?category=${Data.collection}&collection=${Data.id}`,
      }),
      transformResponse: (response: any) => response.result.data,
      providesTags: ["collectionCategory"],
    }),
  }),
});
