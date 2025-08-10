import { Table as TableType } from "@tanstack/react-table";
import { Button } from "../../../Button/Button";

type Props = {
  table: TableType<any>;
};

export const Pagination = ({ table }: Props) => (
  <div className="flex items-center justify-end">
    <div className="flex items-center gap-2">
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <span className="text-sm text-[var(--neutral)]">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </span>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  </div>
);
