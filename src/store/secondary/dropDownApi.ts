import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IParams,
  Result,
  RootObject,
} from "../../utils/types/collectionsCategory";

export const dropDownApi = createApi({
  reducerPath: "dropDownApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["dropDownApi"],
  endpoints: (build) => ({
    fetchFilteredDropdown: build.query<RootObject | any, IParams>({
      query: (Data) => ({
        url: `/product/get-all?category=${Data.collection}&collectionsType=${Data.id}&sort=${Data.name}`,
      }),
      transformResponse: (response: any) => response.result.data,
      providesTags: ["dropDownApi"],
    }),
  }),
});
