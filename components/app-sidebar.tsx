"use client"

import * as React from "react"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
} from "@/components/ui/sidebar"
import { 
  Home, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  BarChart3,
  LineChart,
  Star,
  ArrowUp,
} from "lucide-react"

interface AppSidebarProps {
  activeItem?: string
}

export function AppSidebar({ activeItem = "default" }: AppSidebarProps) {
  return (
    <Sidebar className="dark:bg-[#1A1A1A]">
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
                <SidebarMenuButton 
                  asChild 
                  isActive={activeItem === "default"}
                  className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF] data-[active=true]:dark:bg-[#4C51BF]"
                >
                  <a href="/">
                    <BarChart3 className="h-4 w-4" />
                    <span>Default</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  isActive={activeItem === "ecommerce"}
                  className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF] data-[active=true]:dark:bg-[#4C51BF]"
                >
                  <a href="/orders">
                    <ShoppingCart className="h-4 w-4" />
                    <span>eCommerce</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </a>
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
  )
}
