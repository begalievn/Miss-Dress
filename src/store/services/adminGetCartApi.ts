import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../utils/consts/API";

export const adminGetCartApi = createApi({
  reducerPath: "adminGetCartApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://67.207.94.104:8000/api' }),
  tagTypes: ["adminGetCart"],
  endpoints: (build) => ({
    getCart: build.query({
      query: () => ({
        url: "/cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      providesTags: ["adminGetCart"],
    }),
    getAllBooks: build.query({
      query: (page) => ({
        url: `/user/books/?page=${page}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          'USERNAME': 'nursultan',
          'API-KEY': 'TZB76Jeqvc!o5UNTcjMWNC#6oUj*9m2*'
        }
      })
    })
  }),
});
