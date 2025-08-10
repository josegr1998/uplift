"use client";

import { useMemo } from "react";
import { DistributionTablePresentation } from "./DistributionTablePresentation";
import {
  useDistributions,
  useFilters,
  useTable,
} from "./DistributionTable.hooks";
import {
  filterDistributions,
  getUniqueRegions,
  getUniqueStatuses,
} from "@uplift/ui/utils";

export const DistributionTableContainer = () => {
  const { data: distributions = [], isLoading, error } = useDistributions();

  const { selectedFilters, handleFilterChange } = useFilters();

  const regions = useMemo(() => {
    return getUniqueRegions(distributions);
  }, [distributions]);

  const statuses = useMemo(() => {
    return getUniqueStatuses(distributions);
  }, [distributions]);

  const filteredData = useMemo(() => {
    return filterDistributions({
      distributions,
      filters: selectedFilters,
    });
  }, [distributions, selectedFilters]);

  const hasResults = filteredData.length > 0;

  const { table } = useTable({ filteredData });

  return (
    <DistributionTablePresentation
      table={table}
      isLoading={isLoading}
      error={error}
      filters={selectedFilters}
      regions={regions}
      statuses={statuses}
      onFilterChange={handleFilterChange}
      hasResults={hasResults}
    />
  );
};
