import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// console.log(JSON.parse(localStorage.getItem("accessToken"), "acsess");
export const shoppingCartApi = createApi({
  reducerPath: "shoppingCardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: () => ({
        method: "GET",
        url: "/cart",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
    }),
  }),
});
