interface LandingPageMetadataResponse {
  totalRewardAmt: string;
  avgRewardAmt: string;
}

interface UserPageMetadataResponse {
  totalTxAmt: string;
  totalGasAmt: string;
  totalRewardAmt: string;
}

interface UserTransactionResponse {
  id: number;
  txHash: string;
  gasFeeAmt: string;
  fromAddr: string;
  timestamp: string;
  status: TransactionStatus;
  rewardAmt: string;
  claimable: boolean;
}

interface RoundResponse {
  round: number;
  endTimestamp: string;
}

interface RoundBidResponse {
  uuid: string;
  builderName: string;
  builderAddress: string;
  description: string;
  timestamp: string;
}
