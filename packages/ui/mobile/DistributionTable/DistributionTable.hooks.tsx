import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getDistributions } from "@uplift/network";
import {
  ValidFilter,
  filterDistributions,
  isValidFilter,
} from "@uplift/ui/utils";
import { Distribution } from "@uplift/types";

export const useDistributions = () => {
  return useQuery({
    queryKey: ["distributions"],
    queryFn: getDistributions,
  });
};

export const useFilters = (distributions: Distribution[]) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<ValidFilter, string>
  >({
    region: "",
    status: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const handleFilterToggle = () => setAreFiltersVisible(!areFiltersVisible);

  const handleFilterChange = (filterType: string, value: string) => {
    if (!isValidFilter(filterType)) return;

    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));

    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredData = useMemo(() => {
    return filterDistributions({
      distributions,
      filters: selectedFilters,
    });
  }, [distributions, selectedFilters]);

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return {
    selectedFilters,
    currentPage,
    totalPages,
    paginatedData,
    totalItems: filteredData.length,
    areFiltersVisible,
    handleFilterToggle,
    handlePageChange,
    handleFilterChange,
  };
};
