import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResult, IRootObject } from "../../utils/types/adminUser";

export const adminDeleteUserApi = createApi({
  reducerPath: "adminDeleteUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["adminDeleteUserApi"],
  endpoints: (build) => ({
    deleteAdminUser: build.mutation<IRootObject | any, IResult | any>({
      query: (deleteId: number) => ({
        url: `/user/admin/deletes/user/${Number(deleteId)}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["adminDeleteUserApi"],
    }),
  }),
});
