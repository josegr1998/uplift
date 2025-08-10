import React, { useMemo } from "react";
import { useRouter } from "expo-router";
import { DistributionTablePresentation } from "./DistributionTablePresentation";
import { useDistributions, useFilters } from "./DistributionTable.hooks";
import { getUniqueRegions, getUniqueStatuses } from "@uplift/ui/utils";
import { Distribution } from "@uplift/types";

export const DistributionTableContainer = () => {
  const router = useRouter();
  const { data: distributions = [], isLoading, error } = useDistributions();

  const {
    selectedFilters,
    handleFilterChange,
    currentPage,
    handlePageChange,
    totalPages,
    paginatedData,
    totalItems,
    areFiltersVisible,
    handleFilterToggle,
  } = useFilters(distributions);

  const regions = useMemo(() => {
    return getUniqueRegions(distributions);
  }, [distributions]);

  const statuses = useMemo(() => {
    return getUniqueStatuses(distributions);
  }, [distributions]);

  const handleViewDetails = (distribution: Distribution) =>
    router.push(`/distribution/${distribution.id}`);

  return (
    <DistributionTablePresentation
      distributions={paginatedData}
      isLoading={isLoading}
      error={error as Error | null}
      filters={selectedFilters}
      regions={regions}
      statuses={statuses}
      onFilterChange={handleFilterChange}
      onDistributionSelect={handleViewDetails}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      totalItems={totalItems}
      areFiltersVisible={areFiltersVisible}
      handleFilterToggle={handleFilterToggle}
    />
  );
};
