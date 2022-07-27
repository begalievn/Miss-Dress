import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://discoverystudio.xyz:4343/api/category

// export const categoryAPI = createApi({
//   reducerPath: "categoryAPI",
//   baseQuery: fetchBaseQuery({ baseUrl: API }),
//   tagTypes: ["Category"],
//   endpoints: (build) => ({
//     fetchAllCategory: build.query({
//       query: () => ({
//         url: "/category",
//       }),
//       providesTags: ["Category"],
//     }),
//   }),
// });

export const categoryApi = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api/",
  }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    fetchAllCateggories: build.query({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["Category"],
    }),
  }),
});
