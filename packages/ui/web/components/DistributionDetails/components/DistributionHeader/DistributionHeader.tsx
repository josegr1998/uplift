type Props = {
  id: string;
  title?: string;
};

export const DistributionHeader = ({
  id,
  title = "Distribution Details",
}: Props) => {
  return (
    <div className="bg-[var(--accent)] px-6 py-4 border-b border-[var(--input)]">
      <h1 className="text-2xl font-bold text-[var(--black)]">{title}</h1>
      <p className="text-[var(--neutral)] mt-1">ID: {id}</p>
    </div>
  );
};
