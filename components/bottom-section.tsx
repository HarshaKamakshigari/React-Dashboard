// "use client"

// import { MapPin } from "lucide-react"

// interface LocationData {
//   name: string
//   value: string
// }

// interface ProductData {
//   name: string
//   price: string
//   quantity: number
//   total: string
// }

// interface SalesData {
//   type: string
//   value: string
//   color: string
// }

// function RevenueByLocation() {
//   const locations: LocationData[] = [
//     { name: "New York", value: "72K" },
//     { name: "San Francisco", value: "38K" },
//     { name: "Sydney", value: "25K" },
//     { name: "Singapore", value: "58K" }
//   ]

//   return (
//     <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
//       <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Revenue by Location</h3>
//       <div className="space-y-4">
//         {locations.map((location, index) => (
//           <div key={index} className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 text-gray-600 dark:text-[#A0AEC0]" />
//               <span className="dark:text-[#FFFFFF]">{location.name}</span>
//             </div>
//             <span className="text-sm font-medium dark:text-[#FFFFFF]">{location.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function TopSellingProducts() {
//   const products: ProductData[] = [
//     { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, total: "$6,518.18" },
//     { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, total: "$4,754.50" },
//     { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, total: "$2,559.36" },
//     { name: "Lightweight Jacket", price: "$20.00", quantity: 184, total: "$3,680.00" },
//     { name: "Marco Shoes", price: "$79.49", quantity: 64, total: "$1,965.81" }
//   ]

//   return (
//     <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
//       <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Top Selling Products</h3>
//       <div className="space-y-4">
//         {products.map((product, index) => (
//           <div key={index} className="flex items-center justify-between">
//             <div>
//               <p className="font-medium dark:text-[#FFFFFF]">{product.name}</p>
//               <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">
//                 {product.price} • {product.quantity}
//               </p>
//             </div>
//             <span className="font-medium dark:text-[#FFFFFF]">{product.total}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function TotalSales() {
//   const salesData: SalesData[] = [
//     { type: "Direct", value: "$300.56", color: "bg-green-500 dark:bg-[#A0AEC0]" },
//     { type: "Affiliate", value: "$135.18", color: "bg-blue-500 dark:bg-[#A0AEC0]" },
//     { type: "Sponsored", value: "$154.02", color: "bg-orange-500 dark:bg-[#A0AEC0]" },
//     { type: "E-mail", value: "$48.96", color: "bg-purple-500 dark:bg-[#A0AEC0]" }
//   ]

//   return (
//     <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
//       <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Total Sales</h3>
//       <div className="flex items-center justify-center h-32 mb-4">
//         <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center dark:bg-[#2D3748]">
//           <span className="text-sm font-medium dark:text-[#FFFFFF]">38.6%</span>
//         </div>
//       </div>
//       <div className="space-y-2">
//         {salesData.map((item, index) => (
//           <div key={index} className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className={`w-3 h-3 rounded-full ${item.color}`} />
//               <span className="text-sm dark:text-[#FFFFFF]">{item.type}</span>
//             </div>
//             <span className="text-sm font-medium dark:text-[#FFFFFF]">{item.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export function BottomSection() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       <RevenueByLocation />
//       <TopSellingProducts />
//       <TotalSales />
//     </div>
//   )
// }
// "use client"

// import { MapPin } from "lucide-react"
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer
// } from "recharts"

// const locations = [
//   { name: "New York", value: 72000 },
//   { name: "Texas", value: 38000 },
//   { name: "Sydney", value: 25000 },
//   { name: "India", value: 58000 }
// ]

// const products = [
//   { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, total: 6518.18 },
//   { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, total: 4754.50 },
//   { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, total: 2559.36 },
//   { name: "Lightweight Jacket", price: "$20.00", quantity: 184, total: 3680.00 },
//   { name: "Marco Shoes", price: "$79.49", quantity: 64, total: 1965.81 }
// ]

// const salesData = [
//   { type: "Direct", value: 300.56, color: "#22c55e" },
//   { type: "Affiliate", value: 135.18, color: "#3b82f6" },
//   { type: "Sponsored", value: 154.02, color: "#f97316" },
//   { type: "E-mail", value: 48.96, color: "#a855f7" }
// ]

// export function BottomSection() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
//       {/* Revenue by Location - Bar Chart */}
//       <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748] shadow-sm">
//         <h3 className="text-lg font-semibold mb-4 dark:text-white">Revenue by Location</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart data={locations} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//             <XAxis dataKey="name" stroke="#6b7280" />
//             <YAxis stroke="#6b7280" />
//             <Tooltip formatter={(value: number) => `$${(value / 1000).toFixed(1)}K`} />
//             <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Top Selling Products - List with progress bars */}
//       <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748] shadow-sm">
//         <h3 className="text-lg font-semibold mb-4 dark:text-white">Top Selling Products</h3>
//         <div className="space-y-4">
//           {products.map((product, idx) => {
//             const totalSales = products.reduce((sum, p) => sum + p.total, 0)
//             const percent = (product.total / totalSales) * 100
//             return (
//               <div key={idx}>
//                 <p className="font-medium dark:text-white">{product.name}</p>
//                 <div className="flex justify-between text-xs text-gray-500 dark:text-[#A0AEC0] mb-1">
//                   <span>{product.price} • {product.quantity}</span>
//                   <span>{product.total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
//                 </div>
//                 <div className="w-full bg-gray-200 h-2 rounded-full dark:bg-[#2D3748]">
//                   <div
//                     className="h-2 rounded-full bg-blue-500 transition-all"
//                     style={{ width: `${percent}%` }}
//                   />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* Total Sales - Pie Chart */}
//       <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748] shadow-sm">
//         <h3 className="text-lg font-semibold mb-4 dark:text-white">Total Sales</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={salesData}
//               dataKey="value"
//               nameKey="type"
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#8884d8"
//               label
//             >
//               {salesData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   )
// }
"use client"

import { MapPin } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ResponsivePie } from "@nivo/pie"

const locations = [
  { name: "New York", value: 72000 },
  { name: "Texas", value: 38000 },
  { name: "Sydney", value: 25000 },
  { name: "India", value: 58000 }
]

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, total: 6518.18 },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, total: 4754.50 },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, total: 2559.36 },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, total: 3680.00 },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, total: 1965.81 }
]

const salesData = [
  { id: "Direct", label: "Direct", value: 300.56, color: "#22c55e" },
  { id: "Affiliate", label: "Affiliate", value: 135.18, color: "#3b82f6" },
  { id: "Sponsored", label: "Sponsored", value: 154.02, color: "#f97316" },
  { id: "E-mail", label: "E-mail", value: 48.96, color: "#a855f7" }
]

export function BottomSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Revenue by Location - Bar Chart */}
      <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748] shadow-sm">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Revenue by Location</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={locations} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip formatter={(value: number) => `$${(value / 1000).toFixed(1)}K`} />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Selling Products - List with progress bars */}
      <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748] shadow-sm">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Top Selling Products</h3>
        <div className="space-y-4">
          {products.map((product, idx) => {
            const totalSales = products.reduce((sum, p) => sum + p.total, 0)
            const percent = (product.total / totalSales) * 100
            return (
              <div key={idx}>
                <p className="font-medium dark:text-white">{product.name}</p>
                <div className="flex justify-between text-xs text-gray-500 dark:text-[#A0AEC0] mb-1">
                  <span>{product.price} • {product.quantity}</span>
                  <span>{product.total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full dark:bg-[#2D3748]">
                  <div
                    className="h-2 rounded-full bg-blue-500 transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Total Sales - Nivo Pie Chart */}
      <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748] shadow-sm h-[350px]">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Total Sales</h3>
        <ResponsivePie
          data={salesData}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={(d) => d.data.color}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#6b7280"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          enableArcLabels={true}
          arcLabelsRadiusOffset={0.55}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        />
      </div>

    </div>
  )
}
