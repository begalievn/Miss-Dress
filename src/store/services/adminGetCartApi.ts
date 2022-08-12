import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../utils/consts/API";

export const adminGetCartApi = createApi({
  reducerPath: "adminGetCartApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
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
  }),
});
