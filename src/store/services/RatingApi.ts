import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { SetStateAction } from "react";

export interface IRate {
  rate: number;
  productId: number;
  status: number;
}

export const ratingApi = createApi({
  reducerPath: "ratingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["Rate"],
  endpoints: (build) => ({
    setRating: build.mutation<number, IRate>({
      query: (body) => ({
        url: `/product/set/rate`,
        method: "PATCH",
        body: body,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Rate"],
    }),
  }),
});
