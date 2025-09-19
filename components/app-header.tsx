"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { 
  Search, 
  Bell, 
  Settings, 
  Grid3X3, 
  Clock,
} from "lucide-react"

interface AppHeaderProps {
  title: string
  breadcrumb?: string[]
  onNotificationClick?: () => void
}

export function AppHeader({ title, breadcrumb = ["Dashboards"], onNotificationClick }: AppHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b px-6 dark:bg-[#0A0A0A] dark:border-[#2D3748]">
      <SidebarTrigger className="-ml-1 dark:text-[#FFFFFF]" />
      <div className="h-4 w-px bg-border dark:bg-[#2D3748]" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-[#A0AEC0]">
        {breadcrumb.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && <span>/</span>}
            <span className={index === breadcrumb.length - 1 ? "text-foreground dark:text-[#FFFFFF]" : ""}>
              {item}
            </span>
          </React.Fragment>
        ))}
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
          onClick={onNotificationClick}
          className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]"
        >
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
