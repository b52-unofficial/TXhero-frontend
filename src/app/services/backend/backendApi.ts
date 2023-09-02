import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendApi = createApi({
  reducerPath: `backendApi`,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL }),
  endpoints: (builder) => ({
    getLandingMetadata: builder.query<LandingPageMetadataResponse, void>({
      query: () => `tx/metadata`,
    }),
    getUserMetadata: builder.query<UserPageMetadataResponse, string | undefined>({
      query: (address) => `tx/metadata?address=${address}`,
    }),
    getUserTransactions: builder.query<UserTransactionResponse[], string | undefined>({
      query: (address) => `tx/user?address=${address}`,
    }),
    getCurrentRound: builder.query<RoundResponse, void>({
      query: () => `bid/current_round`,
    }),
    getRound: builder.query<RoundResponse, number>({
      query: (round) => `bid/rounds?round=${round}`,
    }),
    getRoundBids: builder.query<RoundBidResponse[], number>({
      query: (round) => `rounds/${round}/bids`,
    }),
    getUserTransactionChartInfo: builder.query<
      UserTransactionChartInfoResponse[],
      Partial<UserTransactionChartInfoParams>
    >({
      query: ({ address, period }) => `tx/chart_info?address=${address}&period=${period}`,
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
  useGetUserTransactionChartInfoQuery,
} = backendApi;

export default backendApi;
