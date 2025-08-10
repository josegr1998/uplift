import { DistributionDetails } from "@uplift/ui";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DistributionPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <DistributionDetails distributionId={id} />
    </div>
  );
}
