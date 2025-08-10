"use client";

import { useQuery } from "@tanstack/react-query";
import { getDistributionDetails } from "@uplift/network";
import { DistributionDetailsPresentation } from "./DistributionDetailsPresentation";
import { mapDistributionDetails } from "./DistributionDetails.mappers";

type Props = {
  distributionId: string;
};

export const DistributionDetailsContainer = ({ distributionId }: Props) => {
  const {
    data: distributionDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["distribution-details", distributionId],
    queryFn: () => getDistributionDetails(distributionId),
    enabled: !!distributionId,
  });

  const mappedDistributionDetails = mapDistributionDetails(distributionDetails);

  return (
    <DistributionDetailsPresentation
      distributionDetails={mappedDistributionDetails}
      isLoading={isLoading}
      error={error}
    />
  );
};
