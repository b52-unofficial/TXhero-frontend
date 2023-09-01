import { useWeb3React } from '@web3-react/core';
import dayjs from 'dayjs';

import { useGetUserMetadataQuery, useGetUserTransactionsQuery } from '@/app/services/backend/backendApi';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import CardContainer from '@/components/StatCard/CardContainer';
import CardItem from '@/components/StatCard/CardItem';
import DashboardLayout from '@/layouts/DashboardLayout';

export default function UserDashboard() {
  const userAddress = `0x1234`;
  const { isActive } = useWeb3React();
  const { data: metaData } = useGetUserMetadataQuery(userAddress);
  const { data: txData } = useGetUserTransactionsQuery(userAddress);

  return (
    <DashboardLayout title="User Dashboard">
      {isActive ? (
        <div className="px-48">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <CardContainer>
                <CardItem title="Total Tx" subtitle={metaData ? metaData.totalTxAmt : `-`} />
                <CardItem title="Total Gas" subtitle={metaData ? `${metaData.totalGasAmt} ETH` : `-`} />
                <CardItem title="Total Reward" subtitle={metaData ? `${metaData.totalRewardAmt} ETH` : `-`} />
              </CardContainer>
            </div>
          </div>
          <div className="py-24">
            <table className="md:table-auto border-separate border-spacing-8 mx-auto w-full text-center">
              <thead>
                <tr className="text-2xl">
                  <th>Index</th>
                  <th>Tx Hash</th>
                  <th>Timestamp</th>
                  <th>Status</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody>
                {txData?.map((tx) => (
                  <tr key={tx.txHash}>
                    <td>{tx.id}</td>
                    <td>
                      <a href={tx.txHash} target="_blank" rel="noreferrer">
                        {tx.txHash}
                      </a>
                    </td>
                    <td>{dayjs(tx.timestamp).format(`YYYY-MM-DD HH:mm:ss`)}</td>
                    <td>{tx.status}</td>
                    <td>{tx.rewardAmt} ETH</td>
                  </tr>
                ))}
                {/* exmaple. remove later */}
                <tr>
                  <td>1</td>
                  <td>0x32e1asdfas2123</td>
                  <td>2023-08-29 01:00:03</td>
                  <td>Unconfirmed</td>
                  <td>0.00001 ETH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center">
          <ConnectWalletButton />
        </div>
      )}
    </DashboardLayout>
  );
}
