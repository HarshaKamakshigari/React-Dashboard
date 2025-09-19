"use client"

import * as React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { NotificationPanel } from "@/components/notification-panel"
import { OrdersTable } from "@/components/orders-table"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

export default function OrdersPage() {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false)

  return (
    <>
      <AppSidebar activeItem="ecommerce" />
      
      <SidebarInset>
        <AppHeader 
          title="Order List"
          breadcrumb={["Dashboards", "eCommerce"]}
          onNotificationClick={() => setIsNotificationOpen(!isNotificationOpen)}
        />
        
        <main className="flex-1 overflow-auto bg-background dark:bg-[#0A0A0A] no-scrollbar">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-8 dark:text-[#FFFFFF]">Order List</h1>
            
            {/* Enhanced Orders Table */}
            <OrdersTable />
          </div>
        </main>
      </SidebarInset>
      
      {/* Notification Panel */}
      <NotificationPanel 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
    </>
  )
}