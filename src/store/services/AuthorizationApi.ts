import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {API, BASE_URL} from "../../utils/consts/API";

export const AuthorizationAPI = createApi({
  reducerPath: "AuthorizationApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Authorization"],
  endpoints: (build) => ({
    registrationNewUser: build.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        },
      }),
      invalidatesTags: (result) => ["Authorization"],
    }),
    authorizationUser: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => ["Authorization"],
    }),
    getActivatedCode: build.mutation({
      query: (id: number) => ({
        url: `/auth/sms-code/${id}`,
        method: "GET",
      }),
      invalidatesTags: (result) => ["Authorization"],
    }),
    sendActivatedCode: build.mutation({
      query: (data) => ({
        url: "/auth/activate",
        method: "POST",
        body: {
          userId: data.userId,
          code: data.code,
        },
      }),
      invalidatesTags: (result) => ["Authorization"],
    }),
    refreshToken: build.mutation({
      query: (token) => ({
        url: "/auth/refresh-tokens",
        method: "POST",
        body: {
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
      }),
      invalidatesTags: (result) => ["Authorization"],
    }),
    updateCode: build.mutation({
      query: (id: number) => ({
        url: "/auth/update-code",
        method: "POST",
        body: {
          userId: id,
        },
      }),
      invalidatesTags: (result) => ["Authorization"],
    }),
  }),
});
