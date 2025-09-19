"use client"

import { ArrowUp, ArrowDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  change: string
  isPositive: boolean
  bgColor?: string
}

function MetricCard({ title, value, change, isPositive, bgColor = "bg-gray-100 dark:bg-[#1A1A1A]" }: MetricCardProps) {
  return (
    <div className={`rounded-lg p-6 ${bgColor}`}>
      <p className="text-sm dark:text-[#A0AEC0]">{title}</p>
      <p className="text-3xl font-bold mt-2 dark:text-[#FFFFFF]">{value}</p>
      <div className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'} dark:text-[#A0AEC0]`}>
        {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
        <span>{change}</span>
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
    <div className="grid grid-cols-2 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}
