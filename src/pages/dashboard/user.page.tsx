import { useWeb3React } from '@web3-react/core';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useState } from 'react';

import {
  useGetUserMetadataQuery,
  useGetUserTransactionChartInfoQuery,
  useGetUserTransactionsQuery,
} from '@/app/services/backend/backendApi';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import DailyRebateChart from '@/components/DailyRebateChart';
import CardItem from '@/components/StatCard/CardItem';
import DashboardLayout from '@/layouts/DashboardLayout';

import svgEthereum from '../../../public/icons/Ethereum.svg';
import svgItemDot from '../../../public/icons/ItemDot.svg';

export default function UserDashboard() {
  const { account, isActive } = useWeb3React();
  const [period, setPeriod] = useState<UserTransactionChartInfoParams['period']>(`1w`);
  const { data: metaData } = useGetUserMetadataQuery(account, { skip: !account });
  const { data: txData } = useGetUserTransactionsQuery(account, { skip: !account });
  const { data: chartData } = useGetUserTransactionChartInfoQuery({ address: account, period }, { skip: !account });

  return (
    <DashboardLayout title="User Dashboard">
      {isActive ? (
        <div className="px-48 z-10">
          {/* Notice */}
          <div className="w-[1080px] h-10 px-5 py-2 bg-lime-300 rounded-xl justify-center items-center gap-2.5 flex mx-auto">
            <div className="w-6 h-6 relative origin-top-left -rotate-180" />
            <div className="justify-center items-center gap-5 flex">
              <Image src={svgItemDot} width={24} height={24} alt="" />
              <div className="text-black text-sm font-medium">
                Rewards will be distributed based on the transaction fees incurred from the previous day, and they can
                be claimed every day at UTC 00:00.
              </div>
            </div>
          </div>

          {/* Panel Container */}
          <div className="w-[1080px] px-[30px] pt-[30px] pb-[7.50px] bg-stone-950 bg-opacity-90 rounded-3xl shadow border border-neutral-500 flex-col justify-center items-start gap-4 flex mx-auto my-2">
            <div className="w-[1020px] justify-start items-end gap-2 inline-flex">
              <CardItem title="Total Tx" subtitle={metaData ? metaData.totalTxAmt : `-`} />
              <CardItem
                title="Total Gas"
                subtitle={
                  <>
                    <Image src={svgEthereum} alt="" width={24} height={24} />
                    {metaData ? `${metaData.totalGasAmt} ETH` : `-`}
                  </>
                }
              />
              <CardItem
                title="Total Reward"
                subtitle={
                  <>
                    <Image src={svgEthereum} alt="" width={24} height={24} />
                    {metaData ? `${metaData.totalRewardAmt} ETH` : `-`}
                  </>
                }
              />
              <CardItem
                title="Unclaimed Rewards"
                subtitle={
                  <>
                    <Image src={svgEthereum} alt="" width={24} height={24} />
                    {metaData ? `${metaData.totalRewardAmt} ETH` : `-`}
                    <button className="grow shrink basis-0 h-[29px] px-4 py-1.5 rounded-lg border border-neutral-500 justify-center items-center gap-2.5 flex">
                      <div className="text-white text-sm font-medium">Claim</div>
                    </button>
                  </>
                }
              />
            </div>

            {/* Chart */}
            <div className="w-[1020px] px-[30px] py-6 bg-neutral-900 rounded-[18px] border border-neutral-500 flex-col justify-center items-start gap-[30px] flex">
              <div className="self-stretch justify-end items-end gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-[120px] flex">
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-white text-lg font-medium">Daily Chart</div>
                  </div>
                  <div className="grow shrink basis-0 h-[19px] flex-col justify-end items-end gap-3 inline-flex">
                    <div className="flex gap-2">
                      <button
                        className={`${period === `1w` ? `text-lime-300` : `text-zinc-500`} text-sm font-medium`}
                        onClick={() => setPeriod(`1w`)}
                      >
                        1W
                      </button>
                      <button
                        className={`${period === `1m` ? `text-lime-300` : `text-zinc-500`} text-sm font-medium`}
                        onClick={() => setPeriod(`1m`)}
                      >
                        1M
                      </button>
                      <button
                        className={`${period === `3m` ? `text-lime-300` : `text-zinc-500`} text-sm font-medium`}
                        onClick={() => setPeriod(`3m`)}
                      >
                        3M
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-end items-end gap-2.5 inline-flex">
                {chartData && <DailyRebateChart data={chartData} />}
              </div>
            </div>

            <div className="self-stretch min-h-[675.50px] flex-col justify-center items-center gap-[7.50px] flex">
              <div className="self-stretch h-[651px] px-[30px] py-8 bg-stone-950 rounded-3xl border border-neutral-500 flex-col justify-start items-start gap-8 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex">
                    <div className="w-1 h-[17px]" />
                    <div className="w-[100px] h-[17px] relative">
                      <div className="w-[100px] h-[17px] left-0 top-0 absolute" />
                      <div className="w-[54.69px] left-0 top-0 absolute text-white text-sm font-medium">Index</div>
                    </div>
                    <div className="w-[200px] h-[17px] relative">
                      <div className="w-[200px] h-[17px] left-0 top-0 absolute" />
                      <div className="w-[82.54px] left-0 top-0 absolute text-white text-sm font-medium">Tx Hash</div>
                    </div>
                    <div className="w-[200px] h-[17px] relative">
                      <div className="w-[200px] h-[17px] left-0 top-0 absolute" />
                      <div className="w-24 left-0 top-0 absolute text-white text-sm font-medium">Timestamp</div>
                    </div>
                    <div className="w-[200px] h-[17px] relative">
                      <div className="w-[200px] h-[17px] left-0 top-0 absolute" />
                      <div className="w-[75px] left-0 top-0 absolute text-white text-sm font-medium">Status</div>
                    </div>
                    <div className="w-14 h-[17px] relative">
                      <div className="w-12 h-[17px] left-0 top-0 absolute" />
                      <div className="left-0 top-0 absolute text-white text-sm font-medium">Rewards</div>
                    </div>
                    <div className="w-9 h-[17px]" />
                  </div>
                  {txData ? (
                    txData.map((tx, index) => (
                      <div
                        className={`pl-6 py-3 rounded-[18px] justify-start items-center gap-8 inline-flex ${
                          index % 2 === 0 ? `bg-zinc-900` : ``
                        }}`}
                        key={tx.txHash}
                      >
                        <div className="rounded-sm justify-start items-center gap-5 flex">
                          <div className="w-[100px] h-[17px] relative">
                            <div className="w-[100px] h-[17px] left-0 top-0 absolute" />
                            <div className="left-0 top-0 absolute text-white text-sm font-medium">{tx.id}</div>
                          </div>
                          <div className="w-[200px] h-[17px] relative">
                            <div className="w-[200px] h-[17px] left-0 top-0 absolute" />
                            <div className="w-[167.14px] left-0 top-0 absolute text-white text-sm font-medium">
                              {tx.txHash}
                            </div>
                          </div>
                          <div className="w-[200px] h-[17px] relative">
                            <div className="w-[200px] h-[17px] left-0 top-0 absolute" />
                            <div className="w-[176.25px] left-0 top-0 absolute text-white text-sm font-medium">
                              {dayjs(tx.timestamp).format(`YYYY-MM-DD HH:mm:ss`)}
                            </div>
                          </div>
                          <div className="w-[200px] h-[25px] relative">
                            <div className="w-[200px] h-[25px] left-0 top-0 absolute" />
                            {tx.status === `confirmed` ? (
                              <div className="w-[109px] h-[25px] px-3 py-1 left-0 top-0 absolute bg-zinc-800 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <div className="w-[7px] h-[7px] bg-lime-300 rounded-[26px]" />
                                <div className="text-lime-300 text-sm font-medium">{tx.status}</div>
                              </div>
                            ) : (
                              <div className="w-[109px] h-[25px] px-3 py-1 left-0 top-0 absolute bg-zinc-800 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <div className="w-[7px] h-[7px] bg-neutral-500 rounded-[26px]" />
                                <div className="text-neutral-500 text-sm font-medium">{tx.status}</div>
                              </div>
                            )}
                          </div>
                          <div className="w-[163px] h-[17px] relative">
                            <div className="w-[121px] h-[17px] left-0 top-0 absolute" />
                            <div className="w-[163px] left-0 top-0 absolute text-white text-sm font-medium">
                              {tx.rewardAmt} ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-white text-sm font-medium mx-auto pt-32">No Data</div>
                  )}
                </div>
              </div>
            </div>
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
