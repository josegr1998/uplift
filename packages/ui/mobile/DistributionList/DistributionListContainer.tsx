import React, { useState, useMemo } from "react";
import { Distribution } from "@uplift/types";
import { getDistributions } from "@uplift/network";
import { useRouter } from "expo-router";
import { DistributionListPresentation } from "./DistributionListPresentation";

// Container component - handles data fetching and state management
export const DistributionListContainer = () => {
  const router = useRouter();
  const [distributions, setDistributions] = React.useState<Distribution[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [regionFilter, setRegionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Fetch distributions on mount
  React.useEffect(() => {
    const fetchDistributions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getDistributions();
        setDistributions(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch distributions")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDistributions();
  }, []);

  // Get unique values for filters
  const regions = useMemo(() => {
    const uniqueRegions = [...new Set(distributions.map((d) => d.region))];
    return uniqueRegions.sort();
  }, [distributions]);

  const statuses = useMemo(() => {
    const uniqueStatuses = [...new Set(distributions.map((d) => d.status))];
    return uniqueStatuses.sort();
  }, [distributions]);

  // Apply filters
  const filteredData = useMemo(() => {
    return distributions.filter((distribution) => {
      const regionMatch = !regionFilter || distribution.region === regionFilter;
      const statusMatch = !statusFilter || distribution.status === statusFilter;
      return regionMatch && statusMatch;
    });
  }, [distributions, regionFilter, statusFilter]);

  // Handle view details
  const handleViewDetails = (distribution: Distribution) => {
    router.push(`/distribution/${distribution.id}`);
  };

  return (
    <DistributionListPresentation
      distributions={filteredData}
      isLoading={isLoading}
      error={error}
      regionFilter={regionFilter}
      statusFilter={statusFilter}
      regions={regions}
      statuses={statuses}
      onRegionFilterChange={setRegionFilter}
      onStatusFilterChange={setStatusFilter}
      onDistributionSelect={handleViewDetails}
    />
  );
};
