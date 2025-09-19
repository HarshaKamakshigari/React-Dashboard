"use client"

interface ProjectionsChartProps {
  months?: string[]
}

function ProjectionsChart({ months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }: ProjectionsChartProps) {
  return (
    <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
      <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Projections vs Actuals</h3>
      <div className="h-64 flex items-end justify-between gap-2">
        {months.map((month) => (
          <div key={month} className="flex flex-col items-center gap-1">
            <div className="w-8 bg-gray-200 rounded-t h-20 dark:bg-[#2D3748]" />
            <div className="w-8 bg-blue-500 rounded-b h-12 dark:bg-[#3B82F6]" />
            <span className="text-xs text-gray-600 dark:text-[#A0AEC0]">{month}</span>
          </div>
        ))}
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
  return (
    <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
      <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Revenue</h3>
      <div className="flex items-center gap-4 text-sm mb-4 dark:text-[#A0AEC0]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-black dark:bg-[#FFFFFF]" />
          <span>Current Week {currentWeek}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-[#A0AEC0]" />
          <span>Previous Week {previousWeek}</span>
        </div>
      </div>
      <div className="h-64 flex items-center justify-center">
        <div className="text-gray-600 dark:text-[#A0AEC0]">Line Chart Placeholder</div>
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
