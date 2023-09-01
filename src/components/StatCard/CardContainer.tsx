import { PropsWithChildren } from 'react';

export default function CardContainer({ children }: PropsWithChildren) {
  return <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">{children}</dl>;
}
