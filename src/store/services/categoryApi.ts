import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryTypes } from "../../utils/types/types";

export interface CategoryQueryTypes {
  status: number;
  result: CategoryTypes[];
}

export const categoryApi = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api/",
  }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    fetchAllCateggories: build.query<CategoryQueryTypes, any>({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["Category"],
    }),
  }),
});
