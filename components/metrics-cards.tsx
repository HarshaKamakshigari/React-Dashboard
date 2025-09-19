// "use client"

// import { ArrowUp, ArrowDown } from "lucide-react"

// interface MetricCardProps {
//   title: string
//   value: string | number
//   change: string
//   isPositive: boolean
//   bgColor?: string
// }

// function MetricCard({ title, value, change, isPositive, bgColor = "bg-gray-100 dark:bg-[#1A1A1A]" }: MetricCardProps) {
//   return (
//     <div className={`rounded-lg p-6 ${bgColor}`}>
//       <p className="text-sm dark:text-[#A0AEC0]">{title}</p>
//       <p className="text-3xl font-bold mt-2 dark:text-[#FFFFFF]">{value}</p>
//       <div className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'} dark:text-[#A0AEC0]`}>
//         {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
//         <span>{change}</span>
//       </div>
//     </div>
//   )
// }

// export function MetricsCards() {
//   const metrics = [
//     {
//       title: "Customers",
//       value: "3,091",
//       change: "+4.84%",
//       isPositive: true,
//       bgColor: "bg-blue-100 dark:bg-[#1A1A1A] text-blue-900 dark:text-[#FFFFFF]"
//     },
//     {
//       title: "Orders", 
//       value: "1,219",
//       change: "-0.03%",
//       isPositive: false,
//       bgColor: "bg-gray-100 dark:bg-[#1A1A1A] text-gray-900 dark:text-[#FFFFFF]"
//     },
//     {
//       title: "Revenue",
//       value: "$695",
//       change: "+15.38%", 
//       isPositive: true,
//       bgColor: "bg-green-100 dark:bg-[#1A1A1A] text-green-900 dark:text-[#FFFFFF]"
//     },
//     {
//       title: "Growth",
//       value: "30.1%",
//       change: "+6.08%",
//       isPositive: true,
//       bgColor: "bg-yellow-100 dark:bg-[#1A1A1A] text-yellow-900 dark:text-[#FFFFFF]"
//     }
//   ]

//   return (
//     <div className="grid grid-cols-2 gap-6 mb-8">
//       {metrics.map((metric, index) => (
//         <MetricCard key={index} {...metric} />
//       ))}
//     </div>
//   )
// }
"use client"

import * as React from "react"
import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  change: string
  isPositive: boolean
  bgColor?: string
}

function MetricCard({ title, value, change, isPositive, bgColor = "bg-gray-100 dark:bg-[#1A1A1A]" }: MetricCardProps) {
  return (
    <div className={`rounded-lg p-4 ${bgColor}`}>
      <p className="text-xs dark:text-[#A0AEC0]">{title}</p>
      <p className="text-2xl font-bold mt-1 dark:text-[#FFFFFF]">{value}</p>
      <div className={`flex items-center gap-1 mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'} dark:text-[#A0AEC0]`}>
        {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        <span className="text-sm">{change}</span>
      </div>
    </div>
  )
}

export function MetricsCards() {
  const metrics = [
    {
      title: "Customers",
      value: "3,091",
      change: "+4.84%",
      isPositive: true,
      bgColor: "bg-blue-100 dark:bg-[#1A1A1A] text-blue-900 dark:text-[#FFFFFF]"
    },
    {
      title: "Orders", 
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
      bgColor: "bg-gray-100 dark:bg-[#1A1A1A] text-gray-900 dark:text-[#FFFFFF]"
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.38%", 
      isPositive: true,
      bgColor: "bg-green-100 dark:bg-[#1A1A1A] text-green-900 dark:text-[#FFFFFF]"
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      isPositive: true,
      bgColor: "bg-yellow-100 dark:bg-[#1A1A1A] text-yellow-900 dark:text-[#FFFFFF]"
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}

// ---------------- Task Board -------------------

type Task = {
  id: number
  title: string
  description?: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: 1, title: "Design new landing page" },
      { id: 2, title: "Fix bug #235" },
    ],
  },
  {
    id: "inProgress",
    title: "In Progress",
    tasks: [
      { id: 3, title: "Implement user authentication" },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: 4, title: "Release v1.2.0" },
    ],
  },
]

function TaskBoard() {
  const [columns, setColumns] = React.useState<Column[]>(initialColumns)

  // Move task to next column
  const moveTask = (taskId: number, fromColumnId: string, direction: "left" | "right") => {
    setColumns(prevCols => {
      const colIndex = prevCols.findIndex(c => c.id === fromColumnId)
      if (colIndex === -1) return prevCols

      const taskToMove = prevCols[colIndex].tasks.find(t => t.id === taskId)
      if (!taskToMove) return prevCols

      const newCols = [...prevCols]
      // Remove from current
      newCols[colIndex] = {
        ...newCols[colIndex],
        tasks: newCols[colIndex].tasks.filter(t => t.id !== taskId)
      }

      let targetIndex = colIndex + (direction === "right" ? 1 : -1)
      if (targetIndex < 0 || targetIndex >= newCols.length) {
        // can't move out of bounds
        return prevCols
      }

      // Add to target
      newCols[targetIndex] = {
        ...newCols[targetIndex],
        tasks: [...newCols[targetIndex].tasks, taskToMove]
      }

      return newCols
    })
  }

  return (
    <div className="flex gap-3 overflow-x-auto h-full p-3 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col bg-white dark:bg-[#121212] rounded-lg shadow-md w-64 p-3">
          <h3 className="font-semibold mb-3 dark:text-white text-sm">{column.title}</h3>
          <ul className="flex flex-col gap-2 overflow-y-auto max-h-[300px]">
            {column.tasks.map(task => (
              <li
                key={task.id}
                className="p-2 rounded bg-gray-100 dark:bg-[#222] dark:text-white flex flex-col"
              >
                <span className="text-sm">{task.title}</span>
                <div className="mt-1 flex justify-between text-xs">
                  <button
                    disabled={columns.findIndex(c => c.id === column.id) === 0}
                    onClick={() => moveTask(task.id, column.id, "left")}
                    className="p-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Move left"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    disabled={columns.findIndex(c => c.id === column.id) === columns.length -1}
                    onClick={() => moveTask(task.id, column.id, "right")}
                    className="p-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Move right"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// ---------------- Combined Dashboard -------------------

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
      {/* Left side - Metric cards */}
      <MetricsCards />

      {/* Right side - Task board */}
      <TaskBoard />
    </div>
  )
}
