/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

// Custom components
import CustomModal from "@/components/dashboard/shared/custom-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
 
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

//Model Provider Hook
import { useModal } from "@/providers/modal-provider";

//Lucid icons
import { Search } from "lucide-react";
 
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filterValue: string;
  actionButtonText: React.ReactNode;
  modalChildren: React.ReactNode;
  searchPlaceholder: string;
  heading: string;
  subheading?: string;
  noHeader?: true;
}
 
export default function DataTable<TData, TValue>({
  columns,
  data,
  filterValue,
  modalChildren,
  actionButtonText,
  searchPlaceholder,
  heading,
  subheading,
  noHeader,
}: DataTableProps<TData, TValue>) {
  // Modal state
  const { setOpen } = useModal();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
 
  return (
    <>
      {/* Search input and action button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center py-4 gap-2">
          <Search />
          <Input
            placeholder={searchPlaceholder}
            value={
              (table.getColumn(filterValue)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterValue)?.setFilterValue(event.target.value)
            }
            className="h-12"
          />
        </div>
    
        {modalChildren && (
          <Button
            className="flex gap-2"
            onClick={() => {
              if (modalChildren) 
                setOpen(
                  <CustomModal
                    heading={heading || ""}
                    subheading={subheading || ""}
                  >
                    {modalChildren}
                  </CustomModal>,                
              );
            }}
          >
          {actionButtonText}
          </Button>
        )}
      </div>
                                  
      {/* Table */} 
       <div className="rounded-md border">
         <Table>
          <TableHeader>
             {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          
          <TableBody>
             {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="max-w-[400px] break-words">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  )
}