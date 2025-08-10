"use client";

import { useQuery } from "@tanstack/react-query";
import {
  CellContext,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getDistributions } from "@uplift/network";
import { Distribution } from "@uplift/types";
import { useMemo, useState } from "react";
import { ValidFilter, isValidFilter } from "@uplift/ui/utils";
import { getStatusColor } from "../utils/getStatusColor";
import { DEFAULT_PAGE_SIZE } from "./DistributionTable.consts";
import Link from "next/link";

export const useDistributions = () => {
  return useQuery({
    queryKey: ["distributions"],
    queryFn: getDistributions,
  });
};

export const useTable = ({
  filteredData,
}: {
  filteredData: Distribution[];
}) => {
  const columnHelper = createColumnHelper<Distribution>();

  // Define columns
  const columns = useMemo(
    () => [
      columnHelper.accessor("region", {
        header: "Region",
        cell: (regionCell: CellContext<Distribution, string>) =>
          regionCell.getValue(),
      }),
      columnHelper.accessor("date", {
        header: "Date",
        cell: (dateCell: CellContext<Distribution, string>) => {
          const date = new Date(dateCell.getValue());
          return date.toLocaleDateString();
        },
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (statusCell: CellContext<Distribution, string>) => {
          const status = statusCell.getValue();
          const statusColor = getStatusColor(status);
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}
            >
              {status}
            </span>
          );
        },
      }),
      columnHelper.accessor("beneficiaries", {
        header: "Beneficiaries",
        cell: (beneficiariesCell: CellContext<Distribution, number>) =>
          beneficiariesCell.getValue().toLocaleString(),
      }),
      columnHelper.display({
        id: "actions",
        header: "Action",
        cell: (actionsCell: CellContext<Distribution, unknown>) => {
          const distributionId = actionsCell.row.original.id;
          return (
            <Link
              href={`/distribution/${distributionId}`}
              className="px-3 py-1 bg-[var(--primary)] text-white rounded hover:bg-[var(--primary-dark)] transition-colors inline-block"
            >
              View Details
            </Link>
          );
        },
      }),
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: DEFAULT_PAGE_SIZE,
      },
    },
  });

  return {
    table,
  };
};

export const useFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<ValidFilter, string>
  >({
    region: "",
    status: "",
  });

  const handleFilterChange = (filterType: string, value: string) => {
    if (!isValidFilter(filterType)) return;

    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return {
    selectedFilters,
    handleFilterChange,
  };
};
