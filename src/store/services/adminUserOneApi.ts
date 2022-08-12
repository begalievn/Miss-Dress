import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResult, IRootObject } from "../../utils/types/adminUser";

export const adminUserOneApi = createApi({
  reducerPath: "adminUserOneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["adminUserOneApi"],
  endpoints: (build) => ({
    fetchAdminUserOneApi: build.query<IRootObject, number | any>({
      query: (userId: any) => ({
        url: `/user/${userId}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      transformResponse: (response: any) => response.result,
      providesTags: ["adminUserOneApi"],
    }),
  }),
});
