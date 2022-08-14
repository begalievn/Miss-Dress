import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { RootObject,Result } from "../../utils/types/adminPopularProducts";

export const adminRegularUsersApi = createApi({
  reducerPath: "adminRegularUsersApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://discoverystudio.xyz:4343/api"}),
  endpoints: (build) => ({
    fetchGetRegularUsers: build.query<RootObject | any, Result | any> ({
      query: () => ({
        url: "/order/popular-users/price",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      })
    }),
  })
});