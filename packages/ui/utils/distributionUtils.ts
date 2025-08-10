import { Distribution } from "@uplift/types";

// Filter types
export const VALID_FILTERS = ["region", "status"] as const;
export type ValidFilter = (typeof VALID_FILTERS)[number];

export const isValidFilter = (filter: string): filter is ValidFilter =>
  VALID_FILTERS.includes(filter as ValidFilter);

// Utility functions
export const getUniqueRegions = (distributions: Distribution[]) => {
  return [...new Set(distributions.map(({ region }) => region))].sort();
};

export const getUniqueStatuses = (distributions: Distribution[]) => {
  return [
    ...new Set(distributions.map((distribution) => distribution.status)),
  ].sort();
};

// Filtering function
export const filterDistributions = ({
  distributions,
  filters,
}: {
  distributions: Distribution[];
  filters: Record<ValidFilter, string>;
}) => {
  const { region, status } = filters;

  return distributions.filter((distribution) => {
    const matchesRegion = !region || distribution.region === region;
    const matchesStatus = !status || distribution.status === status;

    return matchesRegion && matchesStatus;
  });
};
