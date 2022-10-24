import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IResult, IRootObject } from "../../utils/types/adminUser";

export const adminDeleteProductApi = createApi({
  reducerPath: "adminDeleteProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://discoverystudio.xyz:4343/api",
  }),
  tagTypes: ["adminDeleteProductApi"],
  endpoints: (build) => ({
    deleteAdminProduct: build.mutation<IRootObject | any, IResult | any>({
      query: (deleteId: number) => ({
        url: `/user/admin/deletes/product/${Number(deleteId)}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["adminDeleteProductApi"],
    }),
  }),
});
