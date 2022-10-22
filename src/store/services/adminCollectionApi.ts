import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";



import {BASE_URL} from "../../utils/consts/API";

export const adminCollectionApi = createApi({
  reducerPath: "adminCollectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getProductByCollection: build.query({
      query: ({ collection, Data }) => ({
        url: `/product-statistic/get-product-by-collection/${collection}?page=${Data.counte}&take=${Data.limit}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
    }),
    createAuthor: build.mutation({
      query: (data) => ({
        url: '/v1/admin/author-create',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
    }),
    getAllAuthors: build.query({
      query: () => ({
        url: '/v1/admin/authors-get-all',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
    }),
    getAllBooks: build.query({
      query: (page) => ({
        url: `/v1/user/books/?page=${page}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
    }),
    getAllGengres: build.query({
      query: () => ({
        url: `/v1/admin/genres-get`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
    }),
    getAllUsers: build.query({
      query: () => ({
        url: '/v1/admin/get-available-students',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
    }),
    getBookById: build.query({
      query: (id) => ({
        url: `/v1/admin/book/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
    })
  }),
});
