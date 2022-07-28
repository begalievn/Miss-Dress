import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../utils/consts/API";

export const UserApi = createApi({
  reducerPath: "UserAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UserAPI"],
  endpoints: (build) => ({
    getMe: build.query({
      query: (data) => ({
        url: "/user/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      providesTags: (result) => ["UserAPI"],
    }),
  }),
});
