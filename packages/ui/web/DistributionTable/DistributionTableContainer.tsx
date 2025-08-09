"use client";

import { useMemo } from "react";
import { DistributionTablePresentation } from "./DistributionTablePresentation";
import {
  filterDistributions,
  getUniqueRegions,
  getUniqueStatuses,
} from "./DistributionTable.utils";
import {
  useDistributions,
  useFilters,
  useTable,
} from "./DistributionTable.hooks";

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
    />
  );
};
