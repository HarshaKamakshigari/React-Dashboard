"use client"

import * as React from "react"
import { 
  Bell, 
  Bug, 
  UserPlus, 
  Wifi, 
  X,
  Check,
  MoreHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const notifications = [
    {
      id: 1,
      icon: Bug,
      iconColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      title: "You have a bug that needs...",
      time: "Just now",
      unread: true
    },
    {
      id: 2,
      icon: UserPlus,
      iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      title: "New user registered",
      time: "59 minutes ago",
      unread: true
    },
    {
      id: 3,
      icon: Bug,
      iconColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      title: "You have a bug that needs...",
      time: "12 hours ago",
      unread: false
    },
    {
      id: 4,
      icon: Wifi,
      iconColor: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      unread: false
    }
  ]

  const activities = [
    {
      id: 1,
      user: "J",
      title: "You have a bug that needs...",
      time: "Just now"
    },
    {
      id: 2,
      user: "A",
      title: "Released a new version",
      time: "59 minutes ago"
    },
    {
      id: 3,
      user: "M",
      title: "Submitted a bug",
      time: "12 hours ago"
    },
    {
      id: 4,
      user: "K",
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM"
    },
    {
      id: 5,
      user: "L",
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023"
    }
  ]

  const contacts = [
    { name: "Natali Craig", initials: "NC", gradient: "from-purple-400 to-pink-400" },
    { name: "Drew Cano", initials: "DC", gradient: "from-blue-400 to-cyan-400" },
    { name: "Orlando Diggs", initials: "OD", gradient: "from-green-400 to-emerald-400" },
    { name: "Andi Lane", initials: "AL", gradient: "from-orange-400 to-red-400" },
    { name: "Kate Morrison", initials: "KM", gradient: "from-indigo-400 to-purple-400" },
    { name: "Koray Okumus", initials: "KO", gradient: "from-teal-400 to-blue-400" }
  ]

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Notification Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-card border-l shadow-lg z-50 transform transition-transform duration-300 ease-in-out dark:bg-[#1A1A1A] dark:border-[#2D3748]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 h-full overflow-y-auto no-scrollbar">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold dark:text-[#FFFFFF]">Notifications</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Notifications */}
          <div className="space-y-4 mb-8">
            {notifications.map((notification) => {
              const IconComponent = notification.icon
              return (
                <div key={notification.id} className="flex items-start gap-3">
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", notification.iconColor)}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  {notification.unread && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Activities */}
          <h2 className="text-lg font-semibold mb-6 dark:text-[#FFFFFF]">Activities</h2>
          <div className="space-y-4 mb-8">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-[#2D3748] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {activity.user}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contacts */}
          <h2 className="text-lg font-semibold mb-6 dark:text-[#FFFFFF]">Contacts</h2>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={cn("w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center", contact.gradient)}>
                  <span className="text-white text-xs font-medium">{contact.initials}</span>
                </div>
                <span className="text-sm">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
