import { Distribution } from "@uplift/types";

export const getUniqueRegions = (distributions: Distribution[]) => {
  return [...new Set(distributions.map(({ region }) => region))].sort();
};

export const getUniqueStatuses = (distributions: Distribution[]) => {
  return [...new Set(distributions.map(({ status }) => status))].sort();
};

type FilterDistributionsProps = {
  distributions: Distribution[];
  filters: Record<ValidFilter, string>;
};

export const filterDistributions = ({
  distributions,
  filters,
}: FilterDistributionsProps) => {
  const { region, status } = filters;

  return distributions.filter((distribution) => {
    const matchesRegion = !region || distribution.region === region;
    const matchesStatus = !status || distribution.status === status;

    return matchesRegion && matchesStatus;
  });
};

export const VALID_FILTERS = ["region", "status"] as const;

export type ValidFilter = (typeof VALID_FILTERS)[number];

export const isValidFilter = (filter: string): filter is ValidFilter =>
  VALID_FILTERS.includes(filter as ValidFilter);
