"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown,
  Filter,
  MoreHorizontal,
  Trash2,
  Calendar,
  Eye,
  Edit
} from "lucide-react"

export type Order = {
  id: string
  user: string
  project: string
  address: string
  date: string
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"
  amount: number
  priority: "High" | "Medium" | "Low"
}

const data: Order[] = [
  {
    id: "CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    amount: 2500,
    priority: "High"
  },
  {
    id: "CM9802", 
    user: "Drew Cano",
    project: "E-commerce Site",
    address: "123 Main Street",
    date: "A minute ago",
    status: "Complete",
    amount: 4500,
    priority: "Medium"
  },
  {
    id: "CM9803",
    user: "Orlando Diggs", 
    project: "Mobile App",
    address: "456 Oak Avenue",
    date: "Yesterday",
    status: "Pending",
    amount: 3200,
    priority: "High"
  },
  {
    id: "CM9804",
    user: "Andi Lane",
    project: "Dashboard UI",
    address: "789 Pine Road",
    date: "Feb 2, 2023",
    status: "Approved",
    amount: 1800,
    priority: "Low"
  },
  {
    id: "CM9805",
    user: "Kate Morrison",
    project: "Blog Platform",
    address: "321 Elm Street",
    date: "Feb 1, 2023", 
    status: "Rejected",
    amount: 2100,
    priority: "Medium"
  },
  {
    id: "CM9806",
    user: "John Smith",
    project: "Portfolio Site",
    address: "555 Maple Drive",
    date: "Jan 30, 2023",
    status: "Complete",
    amount: 1200,
    priority: "Low"
  },
  {
    id: "CM9807",
    user: "Sarah Johnson",
    project: "API Integration",
    address: "777 Cedar Lane",
    date: "Jan 28, 2023",
    status: "In Progress",
    amount: 3800,
    priority: "High"
  },
  {
    id: "CM9808",
    user: "Mike Wilson",
    project: "Data Analytics",
    address: "999 Birch Street",
    date: "Jan 25, 2023",
    status: "Pending",
    amount: 5200,
    priority: "High"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-500"
    case "Complete":
      return "bg-green-500"
    case "Pending":
      return "bg-cyan-500"
    case "Approved":
      return "bg-yellow-500"
    case "Rejected":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-red-600 bg-red-50 dark:bg-red-950 dark:text-red-400"
    case "Medium":
      return "text-yellow-600 bg-yellow-50 dark:bg-yellow-950 dark:text-yellow-400"
    case "Low":
      return "text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400"
    default:
      return "text-gray-600 bg-gray-50 dark:bg-gray-950 dark:text-gray-400"
  }
}

export function OrdersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const columns: ColumnDef<Order>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
          aria-label="Select all orders"
          className="rounded border-gray-300"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(!!e.target.checked)}
          aria-label={`Select order ${row.original.id}`}
          className="rounded border-gray-300"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-8 px-2 lg:px-3"
          >
            Order ID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="font-medium">#{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "user",
      header: "User",
      cell: ({ row }) => {
        const user = row.getValue("user") as string
        const initials = user.split(' ').map(n => n[0]).join('')
        return (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <span className="text-white text-xs font-medium">{initials}</span>
            </div>
            <span>{user}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "project",
      header: "Project",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("project")}</div>
      ),
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span>{row.getValue("address")}</span>
          {row.original.id === "CM9805" && (
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-8 px-2 lg:px-3"
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{row.getValue("date")}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
            <span>{status}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-8 px-2 lg:px-3"
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ row }) => {
        const priority = row.getValue("priority") as string
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
            {priority}
          </span>
        )
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                View Details
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit Order
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="flex items-center gap-2 text-red-600">
                <Trash2 className="h-4 w-4" />
                Delete Order
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter orders..."
          value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("user")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
                  className={row.getIsSelected() ? "bg-muted/50" : ""}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
