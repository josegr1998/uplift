import { useQuery } from "@tanstack/react-query";
import { getDistributionDetails } from "@uplift/network";

export const useDistributionDetails = (id: string) => {
  return useQuery({
    queryKey: ["distribution", id],
    queryFn: () => getDistributionDetails(id),
    enabled: !!id, // Only run query when id is available
  });
};
