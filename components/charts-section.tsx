// "use client"

// interface ProjectionsChartProps {
//   months?: string[]
// }

// function ProjectionsChart({ months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }: ProjectionsChartProps) {
//   return (
//     <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
//       <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Projections vs Actuals</h3>
//       <div className="h-64 flex items-end justify-between gap-2">
//         {months.map((month) => (
//           <div key={month} className="flex flex-col items-center gap-1">
//             <div className="w-8 bg-gray-200 rounded-t h-20 dark:bg-[#2D3748]" />
//             <div className="w-8 bg-blue-500 rounded-b h-12 dark:bg-[#3B82F6]" />
//             <span className="text-xs text-gray-600 dark:text-[#A0AEC0]">{month}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// interface RevenueChartProps {
//   currentWeek?: string
//   previousWeek?: string
// }

// function RevenueChart({ 
//   currentWeek = "$58,171", 
//   previousWeek = "$50,708" 
// }: RevenueChartProps) {
//   return (
//     <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
//       <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Revenue</h3>
//       <div className="flex items-center gap-4 text-sm mb-4 dark:text-[#A0AEC0]">
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-black dark:bg-[#FFFFFF]" />
//           <span>Current Week {currentWeek}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-[#A0AEC0]" />
//           <span>Previous Week {previousWeek}</span>
//         </div>
//       </div>
//       <div className="h-64 flex items-center justify-center">
//         <div className="text-gray-600 dark:text-[#A0AEC0]">Line Chart Placeholder</div>
//       </div>
//     </div>
//   )
// }

// export function ChartsSection() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <ProjectionsChart />
//       <RevenueChart />
//     </div>
//   )
// }
"use client"

import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"

interface ProjectionsChartProps {
  months?: string[]
}

function ProjectionsChart({ months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }: ProjectionsChartProps) {
  const data = months.map(month => ({
    month,
    projection: Math.floor(Math.random() * 50) + 50,
    actual: Math.floor(Math.random() * 50) + 50,
  }))

  return (
    <div className="rounded-lg bg-white dark:bg-[#1A1A1A] border dark:border-[#2D3748] p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Projections vs Actuals</h3>
      <div className="h-64">
        <ResponsiveBar
          data={data}
          keys={['projection', 'actual']}
          indexBy="month"
          margin={{ top: 20, right: 20, bottom: 50, left: 40 }}
          padding={0.3}
          colors={['#3B82F6', '#60A5FA']}
          borderRadius={4}
          axisBottom={{ tickRotation: 0, tickSize: 5, tickPadding: 5, tickColor: "#6B7280" }}
          axisLeft={{ tickRotation: 0, tickSize: 5, tickPadding: 5, tickColor: "#6B7280" }}
          tooltip={({ id, value, color }) => (
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold px-3 py-1 rounded shadow">
              {id}: {value}
            </div>
          )}
          theme={{
            tooltip: {
              container: {
                fontWeight: "bold",
                color: "#1F2937",
                background: "#F9FAFB",
              },
            },
            axis: {
              ticks: {
                text: {
                  fill: "#374151",
                  fontSize: 12,
                  fontWeight: 500,
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}

interface RevenueChartProps {
  currentWeek?: string
  previousWeek?: string
}

function RevenueChart({
  currentWeek = "$58,171",
  previousWeek = "$50,708"
}: RevenueChartProps) {
  const lineData = [
    {
      id: "Revenue",
      color: "#3B82F6",
      data: [
        { x: "Mon", y: 8000 },
        { x: "Tue", y: 9000 },
        { x: "Wed", y: 7500 },
        { x: "Thu", y: 9500 },
        { x: "Fri", y: 10000 },
        { x: "Sat", y: 11000 },
        { x: "Sun", y: 12000 }
      ]
    }
  ]

  return (
    <div className="rounded-lg bg-white dark:bg-[#1A1A1A] border dark:border-[#2D3748] p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Revenue</h3>
      <div className="flex items-center gap-4 text-sm mb-4 dark:text-[#A0AEC0]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>Current Week {currentWeek}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
          <span>Previous Week {previousWeek}</span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveLine
          data={lineData}
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          colors={['#3B82F6']}
          pointSize={8}
          pointColor={{ from: 'serieColor' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enableGridX={false}
          enableGridY={true}
          tooltip={({ point }) => (
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold px-3 py-1 rounded shadow">
              {point.data.x}: ${point.data.y.toLocaleString()}
            </div>
          )}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#374151",
                  fontSize: 12,
                  fontWeight: 500,
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <ProjectionsChart />
      <RevenueChart />
    </div>
  )
}
