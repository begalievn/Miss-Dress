import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://discoverystudio.xyz:4343/api/'}),
    endpoints: (build) => ({
        fetchAllOrder: build.query({
            query: (order) => ({
                url: '/order',
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                      localStorage.getItem("accessToken") || "{}"
                    )}`,
                  },
            })
        })
    })
})

