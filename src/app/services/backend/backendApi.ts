import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendApi = createApi({
  reducerPath: `backendApi`,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL }),
  endpoints: (builder) => ({
    getLandingMetadata: builder.query<LandingPageMetadataResponse, string>({
      query: () => `tx/metadata`,
    }),
    getUserMetadata: builder.query<UserPageMetadataResponse, string>({
      query: (address) => `tx/metadata?address=${address}`,
    }),
    getUserTransactions: builder.query<UserTransactionResponse[], string>({
      query: (address) => `tx/user?address=${address}`,
    }),
    getCurrentRound: builder.query<RoundResponse, string>({
      query: () => `bid/current_round`,
    }),
    getRound: builder.query<RoundResponse, string>({
      query: (round) => `bid/rounds?round=${round}`,
    }),
    getRoundBids: builder.query<RoundBidResponse[], string>({
      query: (round) => `rounds/${round}/bids`,
    }),
  }),
});

export const {
  useGetLandingMetadataQuery,
  useGetUserMetadataQuery,
  useGetUserTransactionsQuery,
  useGetCurrentRoundQuery,
  useGetRoundQuery,
  useGetRoundBidsQuery,
} = backendApi;

export default backendApi;
