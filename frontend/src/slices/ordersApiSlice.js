import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createdOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrderDetails: builder.query({
      query:(orderId) => ({
        url: `${ORDERS_URL}/${orderId}`
      }),
      keepUnusedDataFor: 5,
    })
      }),
});

export const { useCreatedOrderMutation, useGetOrderDetailsQuery } = ordersApiSlice;
