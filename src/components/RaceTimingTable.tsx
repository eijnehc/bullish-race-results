import { useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import raceResults from "../data/results.json";

// Define the type for our data
type RaceResult = {
  name: string;
  results: Partial<
    Record<
      string,
      {
        time: string;
        overall_rank?: number;
        gender_rank?: number;
      }
    >
  >;
};

export function RaceTimingTable() {
  const navigate = useNavigate();

  // Initial sorting by name
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ]);

  // Dynamically generate column headers based on years in the data
  const years = Array.from(
    new Set(raceResults.flatMap((runner) => Object.keys(runner.results))),
  ).sort();

  // Define columns
  const columns: ColumnDef<RaceResult>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info: any) => info.getValue(),
    },
    ...years.map((year) => ({
      accessorKey: `results.${year}.time`,
      header: year,
      cell: (info: any) => {
        const yearResults = info.row.original.results[year];
        return yearResults?.time || "";
      },
    })),
  ];

  // Create table instance
  const table = useReactTable({
    data: raceResults,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="container mx-auto min-h-screen bg-gray-900 px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-white">
        JPMCC Bullish Results
      </h1>
      <div className="overflow-x-auto rounded-lg bg-gray-800 shadow-md">
        <table className="w-full border-collapse rounded-lg border border-gray-600 shadow-md">
          <thead className="bg-gray-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer border border-gray-600 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: " ▲",
                      desc: " ▼",
                    }[header.column.getIsSorted() as string] ?? ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer transition-colors hover:bg-gray-800"
                onClick={() => navigate(`/runner/${row.original.name}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-600 px-4 py-3 text-sm"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
