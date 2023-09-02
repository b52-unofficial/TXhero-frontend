interface LandingPageMetadataResponse {
  totalRewardAmt: number;
  avgRewardAmt: number;
}

interface UserPageMetadataResponse {
  totalTxCnt: string;
  totalGasAmt: number;
  totalRewardAmt: number;
}

interface UserTransactionResponse {
  id: number;
  txHash: string;
  gasFeeAmt: number;
  fromAddr: string;
  timestamp: string;
  status: TransactionStatus;
  reward: number;
  claimable: boolean;
}

interface RoundResponse {
  round: number;
  totalTxCount: number;
  endTimestamp: string;
}

interface RoundBidResponse {
  uuid: string;
  builderName: string;
  builderAddress: string;
  description: string;
  timestamp: string;
}

interface UserTransactionChartInfoParams {
  address: string;
  period: string;
}
interface UserTransactionChartInfoResponse {
  date: string;
  totalGasAmt: number;
  totalRebateAmt: number;
}
