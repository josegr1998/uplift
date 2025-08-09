"use client";

import { useQuery } from "@tanstack/react-query";
import { getDistributionDetails } from "@uplift/network";
import { DistributionDetailsPresentation } from "./DistributionDetailsPresentation";
import { mapDistributionToDistributionDetails } from "./DistributionDetails.mappers";

interface DistributionDetailsContainerProps {
  distributionId: string;
}

export const DistributionDetailsContainer = ({
  distributionId,
}: DistributionDetailsContainerProps) => {
  const {
    data: distributionDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["distribution-details", distributionId],
    queryFn: () => getDistributionDetails(distributionId),
    enabled: !!distributionId,
  });

  const mappedDistributionDetails =
    mapDistributionToDistributionDetails(distributionDetails);

  return (
    <DistributionDetailsPresentation
      distributionDetails={mappedDistributionDetails}
      isLoading={isLoading}
      error={error}
    />
  );
};
