import dayjs from 'dayjs';
import Image from 'next/image';

import { useGetCurrentRoundQuery, useGetRoundBidsQuery, useGetRoundQuery } from '@/app/services/backend/backendApi';
import DashboardLayout from '@/layouts/DashboardLayout';

import svgEthereum from '../../../public/icons/Ethereum.svg';

export default function BuilderDashboard() {
  const { data: currentRoundData } = useGetCurrentRoundQuery();
  const currentRound = currentRoundData ? currentRoundData.round - 1 : 1;
  const { data: prevRoundData } = useGetRoundQuery(currentRound);
  const remainingDuration = currentRoundData ? dayjs.duration(dayjs().diff(currentRoundData.endTimestamp)) : null;
  const formattedRemainingTime =
    remainingDuration &&
    `${remainingDuration.hours()}h ${remainingDuration.minutes()}m ${remainingDuration.seconds()}s`;
  const { data: bidsData } = useGetRoundBidsQuery(currentRound);

  return (
    <DashboardLayout title="Builder Dashboard">
      <div className="px-48 z-10">
        <div className="w-[1080px] h-[820px] px-[30px] pt-[30px] pb-[7.50px] bg-stone-950 bg-opacity-90 rounded-3xl shadow border border-neutral-500 flex-col justify-center items-start gap-4 flex mx-auto">
          <div className="w-[1020px] justify-start items-end gap-2 inline-flex">
            <div className="grow shrink basis-0 px-[30px] py-6 bg-stone-950 rounded-[18px] border border-neutral-500 flex-col justify-center items-start gap-4 inline-flex">
              <div className="w-[183px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[62px] justify-start items-center gap-[120px] flex">
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-white text-lg font-medium">Current Round</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="text-white text-2xl font-bold">
                        {currentRoundData ? currentRoundData.round : `-`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 px-[30px] py-6 bg-stone-950 rounded-[18px] border border-neutral-500 flex-col justify-center items-start gap-4 inline-flex">
              <div className="w-[183px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[62px] justify-start items-center gap-[120px] flex">
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-white text-lg font-medium">Remaining Time</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="justify-start items-center gap-2.5 flex">
                        <div className="text-white text-2xl font-bold">{formattedRemainingTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 px-[30px] py-6 bg-stone-950 rounded-[18px] border border-neutral-500 flex-col justify-center items-start gap-4 inline-flex">
              <div className="w-[183px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[62px] justify-start items-center gap-[120px] flex">
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-white text-lg font-medium">Prev Round Txs</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="justify-start items-center gap-2.5 flex">
                        <div className="text-white text-2xl font-bold">{prevRoundData?.round}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[242px] h-[110px] pl-[30px] pr-4 py-5 bg-stone-950 rounded-[18px] border border-neutral-500 flex-col justify-center items-start gap-4 inline-flex">
              <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[62px] justify-start items-center gap-[120px] flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-white text-lg font-medium">Prev Round Fees</div>
                    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[25px] h-[25px] relative">
                        <div className="w-[25px] h-[25px]">
                          <Image src={svgEthereum} alt="" width={24} height={24} />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 h-[29px] justify-start items-center gap-2.5 flex">
                        <div className="text-white text-2xl font-bold">{prevRoundData?.round}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[656.50px] flex-col justify-center items-center gap-[7.50px] flex">
            <div className="self-stretch h-[632px] px-[30px] py-8 bg-stone-950 rounded-3xl border border-neutral-500 flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
                <div className="text-white text-2xl font-semibold">Current Bids</div>
              </div>
              {/* Table */}
              <div className="flex-col justify-start items-start gap-2 flex w-full">
                {/* Table Header */}
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 pl-6 inline-flex">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Builder</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">Bid Amount</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">Timestamp</div>
                  </div>
                </div>
                {/* Table Body */}
                {bidsData?.map((bid, index) => (
                  <div
                    key={bid.uuid}
                    className={`self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex rounded-[18px] pl-6 py-3 ${
                      index % 2 === 0 ? `bg-zinc-900` : ``
                    }`}
                  >
                    <div className="grow shrink basis-0 relative">
                      <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                    </div>
                    <div className="grow shrink basis-0 relative">
                      <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                    </div>
                    <div className="grow shrink basis-0 relative">
                      <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                    </div>
                  </div>
                ))}
                {/* Dummy Data */}
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex bg-zinc-900 rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex bg-zinc-900 rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex bg-zinc-900 rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex bg-zinc-900 rounded-[18px] pl-6 py-3">
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[212.80px] text-white text-sm font-medium">Beaverbuild</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[234px] text-white text-sm font-medium">2.5 ETH</div>
                  </div>
                  <div className="grow shrink basis-0 relative">
                    <div className="w-[246.75px] text-white text-sm font-medium">2023-08-29 01:00:03</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
