import { Table as TableType } from "@tanstack/react-table";
import { Distribution } from "@uplift/types";
import { ValidFilter } from "@uplift/ui/utils";
import { Filter } from "./components/Filter/Filter";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";
import { Table } from "./components/Table/Table";
import { Pagination } from "./components/Pagination/Pagination";

type Props = {
  table: TableType<Distribution>;
  isLoading: boolean;
  error: Error | null;
  filters: Record<ValidFilter, string>;
  regions: string[];
  statuses: string[];
  onFilterChange: (name: string, value: string) => void;
  hasResults: boolean;
};

export const DistributionTablePresentation = ({
  table,
  isLoading,
  error,
  filters,
  regions,
  statuses,
  onFilterChange,
  hasResults,
}: Props) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader size="lg" />
      </div>
    );
  }

  if (error)
    return <Error message={`Error loading distributions: ${error.message}`} />;

  return (
    <div className="space-y-4">
      <div className="flex gap-4 p-4 bg-[var(--accent)] rounded-lg">
        <div className="flex flex-col gap-1">
          <label
            className="text-sm font-medium text-[var(--neutral)]"
            htmlFor="region"
          >
            Region
          </label>
          <Filter
            value={filters.region}
            onChange={onFilterChange}
            options={regions}
            placeholder="All Regions"
            name="region"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-sm font-medium text-[var(--neutral)]"
            htmlFor="status"
          >
            Status
          </label>
          <Filter
            value={filters.status}
            onChange={onFilterChange}
            options={statuses}
            placeholder="All Statuses"
            name="status"
          />
        </div>
      </div>
      {hasResults ? (
        <>
          <div className="overflow-x-auto">
            <Table table={table} />
          </div>

          <div className="px-4 py-3 bg-[var(--background)] border-t border-[var(--input)] w-full">
            <Pagination table={table} />
          </div>
        </>
      ) : (
        <div className="text-center text-lg text-[var(--neutral)]">
          No results found
        </div>
      )}
    </div>
  );
};
