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

function MetricCard({
  title,
  value,
  change,
  isPositive,
  bgColor = "bg-gray-50 dark:bg-[#1A1A1A]",
}: MetricCardProps) {
  return (
    <div
      className={`rounded-xl p-3 shadow-sm ${bgColor} h-[140px] flex flex-col items-start`}
      style={{ minWidth: 120 }}
    >
      <p className="text-[10px] font-medium dark:text-[#7B8794]">{title}</p>
      <p className="text-xl font-extrabold mt-1 dark:text-[#F8FAFC]">{value}</p>
      <div
        className={`flex items-center gap-1 mt-1 ${
          isPositive ? "text-green-500" : "text-red-500"
        } dark:text-[#7B8794]`}
      >
        {isPositive ? (
          <ArrowUp className="h-3 w-3" />
        ) : (
          <ArrowDown className="h-3 w-3" />
        )}
        <span className="text-xs font-semibold">{change}</span>
      </div>
    </div>
  )
}

function MetricsCards() {
  const metrics = [
    {
      title: "Customers",
      value: "3,091",
      change: "+4.84%",
      isPositive: true,
      bgColor:
        "bg-[#A8DADC] dark:bg-[#164A41] text-[#1D3557] dark:text-[#A8DADC]",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
      bgColor:
        "bg-[#FFE5D9] dark:bg-[#4A2C2A] text-[#9E2A2B] dark:text-[#FFE5D9]",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.38%",
      isPositive: true,
      bgColor:
        "bg-[#E6F4EA] dark:bg-[#264653] text-[#2A9D8F] dark:text-[#E6F4EA]",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      isPositive: true,
      bgColor:
        "bg-[#FFF3B0] dark:bg-[#776B2A] text-[#E9C46A] dark:text-[#FFF3B0]",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 mb-4 h-full overflow-y-auto">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}

type TicketStatus = "Open" | "Pending" | "Closed"

type Ticket = {
  id: number
  title: string
  customer: string
  status: TicketStatus
  updatedAt: string
}

const initialTickets: Ticket[] = [
  {
    id: 1,
    title: "Cannot reset password",
    customer: "Alice Johnson",
    status: "Open",
    updatedAt: "2025-09-19T10:15:00Z",
  },
  {
    id: 2,
    title: "Issue with order #1234",
    customer: "Bob Smith",
    status: "Pending",
    updatedAt: "2025-09-18T16:40:00Z",
  },
  {
    id: 3,
    title: "Refund request",
    customer: "Charlie Lee",
    status: "Closed",
    updatedAt: "2025-09-17T14:20:00Z",
  },
]

const statusOrder: TicketStatus[] = ["Open", "Pending", "Closed"]

function SupportTickets() {
  const [tickets, setTickets] = React.useState<Ticket[]>(initialTickets)

  const moveTicketStatus = (ticketId: number, direction: "left" | "right") => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) => {
        if (ticket.id !== ticketId) return ticket

        const currentIndex = statusOrder.indexOf(ticket.status)
        let newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1

        if (newIndex < 0 || newIndex >= statusOrder.length) return ticket

        return {
          ...ticket,
          status: statusOrder[newIndex],
          updatedAt: new Date().toISOString(),
        }
      })
    )
  }

  const ticketsByStatus = statusOrder.reduce<Record<TicketStatus, Ticket[]>>(
    (acc, status) => {
      acc[status] = tickets.filter((t) => t.status === status)
      return acc
    },
    { Open: [], Pending: [], Closed: [] }
  )

  const bgColors: Record<TicketStatus, string> = {
    Open: "bg-[#BEE3DB] dark:bg-[#204E4A]", // soft teal
    Pending: "bg-[#FFE5E5] dark:bg-[#4A2C2A]", // soft red
    Closed: "bg-[#FFF3C4] dark:bg-[#776B2A]", // soft yellow
  }
  const textColors: Record<TicketStatus, string> = {
    Open: "text-[#1D3557] dark:text-[#A8DADC]",
    Pending: "text-[#9E2A2B] dark:text-[#FFE5D9]",
    Closed: "text-[#E9C46A] dark:text-[#FFF3B0]",
  }

  return (
    <div className="flex gap-4 overflow-x-auto h-full p-2 rounded-lg">
      {statusOrder.map((status) => (
        <div
          key={status}
          className={`flex flex-col rounded-xl shadow-md w-64 p-3 ${bgColors[status]}`}
        >
          <h3 className={`font-semibold mb-3 text-sm ${textColors[status]}`}>
            {status} Tickets
          </h3>
          <ul className="flex flex-col gap-2 overflow-y-auto max-h-full">
            {ticketsByStatus[status].length === 0 && (
              <li className="text-xs text-gray-600 dark:text-gray-400 italic">
                No tickets
              </li>
            )}
            {ticketsByStatus[status].map((ticket) => (
              <li
                key={ticket.id}
                className="p-2 rounded-md bg-white dark:bg-[#222] dark:text-white flex flex-col text-sm shadow-sm"
              >
                <div className="font-semibold truncate">{ticket.title}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">
                  Customer: {ticket.customer}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Last updated: {new Date(ticket.updatedAt).toLocaleString()}
                </div>
                <div className="mt-1 flex justify-between text-xs">
                  <button
                    disabled={status === "Open"}
                    onClick={() => moveTicketStatus(ticket.id, "left")}
                    className="p-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Move status left"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    disabled={status === "Closed"}
                    onClick={() => moveTicketStatus(ticket.id, "right")}
                    className="p-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Move status right"
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

// ----------- Combined Dashboard -------------

export function Dashboard2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[350px] p-3">
      {/* Left side - Metric cards */}
      <div className="h-auto md:h-full">
        <MetricsCards />
      </div>

      {/* Right side - Support Tickets */}
      <div className="h-auto md:h-full select-none">
        <SupportTickets />
      </div>
    </div>
  )
}
