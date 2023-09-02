import { ReactNode } from 'react';

export default function CardItem({ title, subtitle }: { title?: string; subtitle?: ReactNode }) {
  return (
    <div className="grow shrink basis-0 px-[30px] py-6 bg-stone-950 rounded-[18px] border border-neutral-500 flex-col justify-center items-start gap-4 inline-flex">
      <div className="w-[183px] justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[62px] justify-start items-center gap-[120px] flex">
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-white text-lg font-medium">{title}</div>
            <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="text-white text-2xl font-bold self-stretch justify-start items-center gap-2.5 inline-flex">
                {subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
