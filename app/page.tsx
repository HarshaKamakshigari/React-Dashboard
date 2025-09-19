"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { NotificationPanel } from "@/components/notification-panel"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { MetricsCards } from "@/components/metrics-cards"
import { ChartsSection } from "@/components/charts-section"
import { BottomSection } from "@/components/bottom-section"

export default function Page() {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false)

  return (
    <>
      <AppSidebar activeItem="default" />
      
      <SidebarInset>
        <AppHeader 
          title="eCommerce"
          breadcrumb={["Dashboards", "Default"]}
          onNotificationClick={() => setIsNotificationOpen(!isNotificationOpen)}
        />
        
        <main className="flex-1 overflow-auto bg-background dark:bg-[#0A0A0A] no-scrollbar">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-8 dark:text-[#FFFFFF]">eCommerce</h1>
            
            <MetricsCards />
            <ChartsSection />
            <BottomSection />
          </div>
        </main>
      </SidebarInset>
      
      <NotificationPanel 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
    </>
  )
}