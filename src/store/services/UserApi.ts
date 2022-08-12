import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../utils/consts/API";

export const UserApi = createApi({
  reducerPath: "UserAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UserAPI"],
  endpoints: (build) => ({
    getAll: build.query({
      query: (Data: any) => ({
        url: `/user/get-all?page=${Data.counte}&take=${Data.limit}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
    }),
    // getOneUser: build.query({
    //   query: (name: any) => ({
    //     url: `/user/get-all?name=${name}`,
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${JSON.parse(
    //         localStorage.getItem("accessToken") || "{}"
    //       )}`,
    //     },
    //   }),
    // }),
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
    }),
    editNumber: build.mutation({
      query: (data) => ({
        url: "/user/add-phone",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body: {
          phoneNumber: data,
        },
      }),
    }),
    updateNumber: build.mutation({
      query: (data) => ({
        url: "user/update-phone",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body: {
          phoneNumber: data.phoneNumber,
          code: data.code,
        },
      }),
    }),
  }),
});
