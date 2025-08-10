import { DistributionDetails } from "@uplift/ui";

type Props = {
  params: {
    id: string;
  };
};

export default function DistributionPage({ params }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DistributionDetails distributionId={params.id} />
    </div>
  );
}
