import { flexRender, type Table as TableType } from "@tanstack/react-table";

type Props = {
  table: TableType<any>;
};

export const Table = ({ table }: Props) => (
  <table className="min-w-full bg-[var(--background)] border border-[var(--input)] rounded-lg overflow-hidden">
    <thead className="bg-[var(--accent)]">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="px-6 py-3 text-left text-xs font-medium text-[var(--neutral)] uppercase tracking-wider"
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody className="bg-[var(--background)] divide-y divide-[var(--input)]">
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className="hover:bg-[var(--accent)]">
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
