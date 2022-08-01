import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryQueryTypes } from "./categoryApi";

export const CollectionApi = createApi({
  reducerPath: "CollectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api/",
  }),
  tagTypes: ["Collections"],
  endpoints: (build) => ({
    fetchAllCollections: build.query<CategoryQueryTypes, any>({
      query: () => ({
        url: "collections/all",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token") || "{}"
          )}`,
        },
      }),
      providesTags: ["Collections"],
    }),
  }),
});
