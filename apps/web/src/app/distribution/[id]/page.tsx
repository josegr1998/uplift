import { DistributionDetails } from "@uplift/ui";

interface DistributionPageProps {
  params: {
    id: string;
  };
}

export default function DistributionPage({ params }: DistributionPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DistributionDetails distributionId={params.id} />
    </div>
  );
}
