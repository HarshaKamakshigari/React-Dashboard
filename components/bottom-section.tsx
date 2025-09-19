"use client"

import { MapPin } from "lucide-react"

interface LocationData {
  name: string
  value: string
}

interface ProductData {
  name: string
  price: string
  quantity: number
  total: string
}

interface SalesData {
  type: string
  value: string
  color: string
}

function RevenueByLocation() {
  const locations: LocationData[] = [
    { name: "New York", value: "72K" },
    { name: "San Francisco", value: "38K" },
    { name: "Sydney", value: "25K" },
    { name: "Singapore", value: "58K" }
  ]

  return (
    <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
      <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Revenue by Location</h3>
      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-600 dark:text-[#A0AEC0]" />
              <span className="dark:text-[#FFFFFF]">{location.name}</span>
            </div>
            <span className="text-sm font-medium dark:text-[#FFFFFF]">{location.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TopSellingProducts() {
  const products: ProductData[] = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, total: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, total: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, total: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, total: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, total: "$1,965.81" }
  ]

  return (
    <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
      <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Top Selling Products</h3>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="font-medium dark:text-[#FFFFFF]">{product.name}</p>
              <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">
                {product.price} • {product.quantity}
              </p>
            </div>
            <span className="font-medium dark:text-[#FFFFFF]">{product.total}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TotalSales() {
  const salesData: SalesData[] = [
    { type: "Direct", value: "$300.56", color: "bg-green-500 dark:bg-[#A0AEC0]" },
    { type: "Affiliate", value: "$135.18", color: "bg-blue-500 dark:bg-[#A0AEC0]" },
    { type: "Sponsored", value: "$154.02", color: "bg-orange-500 dark:bg-[#A0AEC0]" },
    { type: "E-mail", value: "$48.96", color: "bg-purple-500 dark:bg-[#A0AEC0]" }
  ]

  return (
    <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
      <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Total Sales</h3>
      <div className="flex items-center justify-center h-32 mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center dark:bg-[#2D3748]">
          <span className="text-sm font-medium dark:text-[#FFFFFF]">38.6%</span>
        </div>
      </div>
      <div className="space-y-2">
        {salesData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm dark:text-[#FFFFFF]">{item.type}</span>
            </div>
            <span className="text-sm font-medium dark:text-[#FFFFFF]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BottomSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <RevenueByLocation />
      <TopSellingProducts />
      <TotalSales />
    </div>
  )
}
