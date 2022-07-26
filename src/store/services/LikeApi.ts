import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export const LikeApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  endpoints: (build) => ({
    fetchAllLike: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: "/product/favorite/0",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
