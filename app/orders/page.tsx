"use client"

import * as React from "react"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarInset, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger 
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { NotificationPanel } from "@/components/notification-panel"
import { OrdersTable } from "@/components/orders-table"
import { 
  Home, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Search, 
  Bell, 
  Settings, 
  Grid3X3, 
  Clock,
  BarChart3,
  LineChart,
  Star,
  ArrowUp,
  Check,
  Plus,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Trash2,
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

export default function OrdersPage() {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false)

  return (
    <>
      <Sidebar className="dark:bg-[#1AGrad1A1A]">
        <SidebarHeader className="dark:bg-[#1A1A1A]">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Star className="h-4 w-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold dark:text-[#FFFFFF]">Harsha's</span>
              <span className="truncate text-xs dark:text-[#A0AEC0]">Dashboard</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="dark:bg-[#1A1A1A]">
          <SidebarGroup>
            <SidebarGroupLabel className="dark:text-[#A0AEC0]">Favorites</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel className="dark:text-[#A0AEC0]">Dashboards</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <a href="/">
                      <BarChart3 className="h-4 w-4" />
                      <span>Default</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive className="dark:text-[#FFFFFF] dark:bg-[#4C51BF]">
                    <ShoppingCart className="h-4 w-4" />
                    <span>eCommerce</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <TrendingUp className="h-4 w-4" />
                    <span>Projects</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <LineChart className="h-4 w-4" />
                    <span>Online Courses</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="dark:text-[#A0AEC0]">Pages</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <Users className="h-4 w-4" />
                    <span>User Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <Home className="h-4 w-4" />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <TrendingUp className="h-4 w-4" />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <DollarSign className="h-4 w-4" />
                    <span>Campaigns</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <Settings className="h-4 w-4" />
                    <span>Documents</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
                    <Users className="h-4 w-4" />
                    <span>Followers</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-4 border-b px-6 dark:bg-[#0A0A0A] dark:border-[#2D3748]">
          <SidebarTrigger className="-ml-1 dark:text-[#FFFFFF]" />
          <div className="h-4 w-px bg-border dark:bg-[#2D3748]" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-[#A0AEC0]">
            <span>Dashboards</span>
            <span>/</span>
            <span className="text-foreground dark:text-[#FFFFFF]">Default</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground dark:text-[#A0AEC0]" />
              <Input placeholder="Search" className="pl-9 w-64 bg-white dark:bg-[#1A1A1A] dark:text-[#FFFFFF] dark:border-[#2D3748]" />
            </div>
            <Button variant="ghost" size="icon" className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
              <Clock className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]"
            >
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>
        
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