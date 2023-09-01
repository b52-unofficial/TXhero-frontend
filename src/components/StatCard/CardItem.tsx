export default function CardItem({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dd className="text-xl font-semibold tracking-tight text-white sm:text-4xl">{title}</dd>
      <dt className="text-3xl leading-7 text-white">{subtitle}</dt>
    </div>
  );
}
