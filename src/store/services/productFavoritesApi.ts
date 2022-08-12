import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../../utils/consts/API";

export const productFavoritesApi = createApi({
  reducerPath: "productFavoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  tagTypes: ["ProductFav"],
  endpoints: (build) => ({
    getFavorites: build.query({
      query: (Data: any) => ({
        url: `/product/list/favorites?page=${Data.counte}&take=${Data.limit}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      providesTags: ["ProductFav"],
    }),
    addFavorites: build.mutation({
      query: (Data: any) => ({
        url: `/product/favorite/${Data.id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body: Data,
      }),
      invalidatesTags: ["ProductFav"],
    }),
  }),
});
