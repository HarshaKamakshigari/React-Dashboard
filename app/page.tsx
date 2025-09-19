// "use client"

// import * as React from "react"
// import { 
//   Sidebar, 
//   SidebarContent, 
//   SidebarFooter, 
//   SidebarGroup, 
//   SidebarGroupContent, 
//   SidebarGroupLabel, 
//   SidebarHeader, 
//   SidebarInset, 
//   SidebarMenu, 
//   SidebarMenuButton, 
//   SidebarMenuItem, 
//   SidebarTrigger 
// } from "@/components/ui/sidebar"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { NotificationPanel } from "@/components/notification-panel"
// import { 
//   Home, 
//   Users, 
//   ShoppingCart, 
//   DollarSign, 
//   TrendingUp, 
//   Search, 
//   Bell, 
//   Settings, 
//   Grid3X3, 
//   Sun,
//   Clock,
//   MapPin,
//   BarChart3,
//   LineChart,
//   PieChart,
//   ArrowUp,
//   ArrowDown,
//   Bug,
//   UserPlus,
//   Wifi,
//   Star,
//   MoreHorizontal
// } from "lucide-react"

// export default function Page() {
//   const [isNotificationOpen, setIsNotificationOpen] = React.useState(false)

//   return (
//     <>
//       <Sidebar>
//         <SidebarHeader>
//           <div className="flex items-center gap-2 px-2 py-2">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
//               <Star className="h-4 w-4" />
//             </div>
//             <div className="grid flex-1 text-left text-sm leading-tight">
//               <span className="truncate font-semibold">Harsha's</span>
//               <span className="truncate text-xs">Dashboard</span>
//             </div>
//           </div>
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Favorites</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <div className="h-2 w-2 rounded-full bg-muted-foreground" />
//                     <span>Overview</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <div className="h-2 w-2 rounded-full bg-muted-foreground" />
//                     <span>Projects</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
          
//           <SidebarGroup>
//             <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton isActive>
//                     <BarChart3 className="h-4 w-4" />
//                     <span>Default</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton asChild>
//                     <a href="/orders">
//                       <ShoppingCart className="h-4 w-4" />
//                       <span>eCommerce</span>
//                       <ArrowUp className="h-3 w-3 ml-auto" />
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <TrendingUp className="h-4 w-4" />
//                     <span>Projects</span>
//                     <ArrowUp className="h-3 w-3 ml-auto" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <LineChart className="h-4 w-4" />
//                     <span>Online Courses</span>
//                     <ArrowUp className="h-3 w-3 ml-auto" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>

//           <SidebarGroup>
//             <SidebarGroupLabel>Pages</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <Users className="h-4 w-4" />
//                     <span>User Profile</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <Home className="h-4 w-4" />
//                     <span>Overview</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <TrendingUp className="h-4 w-4" />
//                     <span>Projects</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <DollarSign className="h-4 w-4" />
//                     <span>Campaigns</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <Settings className="h-4 w-4" />
//                     <span>Documents</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <Users className="h-4 w-4" />
//                     <span>Followers</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//         {/* <SidebarFooter>
//           <SidebarGroup>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <span>Account</span>
//                     <ArrowUp className="h-3 w-3 ml-auto" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <span>Corporate</span>
//                     <ArrowUp className="h-3 w-3 ml-auto" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <span>Blog</span>
//                     <ArrowUp className="h-3 w-3 ml-auto" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <span>Social</span>
//                     <ArrowUp className="h-3 w-3 ml-auto" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarFooter> */}
//       </Sidebar>
      
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-4 border-b px-6">
//           <SidebarTrigger className="-ml-1" />
//           <div className="h-4 w-px bg-border" />
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <span>Dashboards</span>
//             <span>/</span>
//             <span className="text-foreground">Default</span>
//           </div>
//           <div className="flex-1" />
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//               <Input placeholder="Search" className="pl-9 w-64" />
//             </div>
//             <Button variant="ghost" size="icon">
//               <Grid3X3 className="h-4 w-4" />
//             </Button>
//             <ThemeToggle />
//             <Button variant="ghost" size="icon">
//               <Clock className="h-4 w-4" />
//             </Button>
//             <Button 
//               variant="ghost" 
//               size="icon"
//               onClick={() => setIsNotificationOpen(!isNotificationOpen)}
//             >
//               <Bell className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Settings className="h-4 w-4" />
//             </Button>
//           </div>
//         </header>
        
//         <main className="flex-1 overflow-auto bg-background no-scrollbar">
//           <div className="p-6">
//             <h1 className="text-3xl font-bold mb-8">eCommerce</h1>
            
//             {/* Metrics Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-blue-100 text-sm">Customers</p>
//                     <p className="text-3xl font-bold">3,781</p>
//                     <div className="flex items-center gap-1 mt-2">
//                       <ArrowUp className="h-3 w-3" />
//                       <span className="text-sm">+11.01%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="rounded-lg bg-card p-6 border">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-muted-foreground text-sm">Orders</p>
//                     <p className="text-3xl font-bold">1,219</p>
//                     <div className="flex items-center gap-1 mt-2">
//                       <ArrowDown className="h-3 w-3 text-red-500" />
//                       <span className="text-sm text-red-500">-0.03%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="rounded-lg bg-card p-6 border">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-muted-foreground text-sm">Revenue</p>
//                     <p className="text-3xl font-bold">$695</p>
//                     <div className="flex items-center gap-1 mt-2">
//                       <ArrowUp className="h-3 w-3 text-green-500" />
//                       <span className="text-sm text-green-500">+15.03%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="rounded-lg bg-card p-6 border">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-muted-foreground text-sm">Growth</p>
//                     <p className="text-3xl font-bold">30.1%</p>
//                     <div className="flex items-center gap-1 mt-2">
//                       <ArrowUp className="h-3 w-3 text-green-500" />
//                       <span className="text-sm text-green-500">+6.08%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Charts Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               {/* Projections vs Actuals Chart */}
//               <div className="rounded-lg bg-card p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">Projections vs Actuals</h3>
//                 <div className="h-64 flex items-end justify-between gap-2">
//                   {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
//                     <div key={month} className="flex flex-col items-center gap-2">
//                       <div className="flex flex-col gap-1">
//                         <div className="w-8 bg-muted rounded-t h-20" />
//                         <div className="w-8 bg-primary rounded-b h-12" />
//                       </div>
//                       <span className="text-xs text-muted-foreground">{month}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Revenue Line Chart */}
//               <div className="rounded-lg bg-card p-6 border">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold">Revenue</h3>
//                   <div className="flex items-center gap-4 text-sm">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-primary" />
//                       <span>Current Week $58,211</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-muted-foreground" />
//                       <span>Previous Week $68,768</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="h-64 flex items-center justify-center">
//                   <div className="text-muted-foreground">Line Chart Placeholder</div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Revenue by Location */}
//               <div className="rounded-lg bg-card p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">Revenue by Location</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-4 w-4 text-muted-foreground" />
//                       <span>New York</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-16 h-2 bg-muted rounded-full">
//                         <div className="w-3/4 h-full bg-primary rounded-full" />
//                       </div>
//                       <span className="text-sm font-medium">72K</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-4 w-4 text-muted-foreground" />
//                       <span>San Francisco</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-16 h-2 bg-muted rounded-full">
//                         <div className="w-1/2 h-full bg-primary rounded-full" />
//                       </div>
//                       <span className="text-sm font-medium">39K</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-4 w-4 text-muted-foreground" />
//                       <span>Sydney</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-16 h-2 bg-muted rounded-full">
//                         <div className="w-1/3 h-full bg-primary rounded-full" />
//                       </div>
//                       <span className="text-sm font-medium">25K</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-4 w-4 text-muted-foreground" />
//                       <span>Singapore</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-16 h-2 bg-muted rounded-full">
//                         <div className="w-2/3 h-full bg-primary rounded-full" />
//                       </div>
//                       <span className="text-sm font-medium">61K</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Top Selling Products */}
//               <div className="rounded-lg bg-card p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">ASOS Ridley High Waist</p>
//                       <p className="text-sm text-muted-foreground">$79.49 • 82</p>
//                     </div>
//                     <span className="font-medium">$6,518.18</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">Marco Lightweight Shirt</p>
//                       <p className="text-sm text-muted-foreground">$128.50 • 37</p>
//                     </div>
//                     <span className="font-medium">$4,754.50</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">Half Sleeve Shirt</p>
//                       <p className="text-sm text-muted-foreground">$39.99 • 64</p>
//                     </div>
//                     <span className="font-medium">$2,559.36</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">Lightweight Jacket</p>
//                       <p className="text-sm text-muted-foreground">$20.00 • 184</p>
//                     </div>
//                     <span className="font-medium">$3,680.00</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">Marco Shoes</p>
//                       <p className="text-sm text-muted-foreground">$79.49 • 64</p>
//                     </div>
//                     <span className="font-medium">$1,965.81</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Total Sales Donut Chart */}
//               <div className="rounded-lg bg-card p-6 border">
//                 <h3 className="text-lg font-semibold mb-4">Total Sales</h3>
//                 <div className="flex items-center justify-center h-32 mb-4">
//                   <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
//                     <span className="text-sm font-medium">38.6%</span>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-green-500" />
//                       <span className="text-sm">Direct</span>
//                     </div>
//                     <span className="text-sm font-medium">$300.56</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-blue-500" />
//                       <span className="text-sm">Affiliate</span>
//                     </div>
//                     <span className="text-sm font-medium">$135.18</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-orange-500" />
//                       <span className="text-sm">Sponsored</span>
//                     </div>
//                     <span className="text-sm font-medium">$154.02</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-purple-500" />
//                       <span className="text-sm">E-mail</span>
//                     </div>
//                     <span className="text-sm font-medium">$48.96</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </SidebarInset>
      
//       {/* Notification Panel */}
//       <NotificationPanel 
//         isOpen={isNotificationOpen} 
//         onClose={() => setIsNotificationOpen(false)} 
//       />
//     </>
//   )
// }
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
  Sun,
  Clock,
  MapPin,
  BarChart3,
  LineChart,
  PieChart,
  ArrowUp,
  ArrowDown,
  Bug,
  UserPlus,
  Wifi,
  Star,
  MoreHorizontal
} from "lucide-react"

export default function Page() {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false)

  return (
    <>
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
                  <SidebarMenuButton isActive className="dark:text-[#FFFFFF] dark:bg-[#4C51BF]">
                    <BarChart3 className="h-4 w-4" />
                    <span>Default</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="dark:text-[#FFFFFF] dark:hover:bg-[#4C51BF]">
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
            <h1 className="text-3xl font-bold mb-8 dark:text-[#FFFFFF]">eCommerce</h1>
            
            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg bg-blue-100 p-6 text-blue-900 dark:bg-[#1A1A1A] dark:text-[#FFFFFF]">
                <p className="text-sm">Customers</p>
                <p className="text-3xl font-bold mt-2">3,091</p>
                <div className="flex items-center gap-1 mt-2 text-green-600 dark:text-[#A0AEC0]">
                  <ArrowUp className="h-3 w-3" />
                  <span>+4.84%</span>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 text-gray-900 dark:bg-[#1A1A1A] dark:text-[#FFFFFF]">
                <p className="text-sm">Orders</p>
                <p className="text-3xl font-bold mt-2">1,219</p>
                <div className="flex items-center gap-1 mt-2 text-red-600 dark:text-[#A0AEC0]">
                  <ArrowDown className="h-3 w-3" />
                  <span>-0.03%</span>
                </div>
              </div>
              <div className="rounded-lg bg-green-100 p-6 text-green-900 dark:bg-[#1A1A1A] dark:text-[#FFFFFF]">
                <p className="text-sm">Revenue</p>
                <p className="text-3xl font-bold mt-2">$695</p>
                <div className="flex items-center gap-1 mt-2 text-green-600 dark:text-[#A0AEC0]">
                  <ArrowUp className="h-3 w-3" />
                  <span>+15.38%</span>
                </div>
              </div>
              <div className="rounded-lg bg-yellow-100 p-6 text-yellow-900 dark:bg-[#1A1A1A] dark:text-[#FFFFFF]">
                <p className="text-sm">Growth</p>
                <p className="text-3xl font-bold mt-2">30.1%</p>
                <div className="flex items-center gap-1 mt-2 text-green-600 dark:text-[#A0AEC0]">
                  <ArrowUp className="h-3 w-3" />
                  <span>+6.08%</span>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
                <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Projections vs Actuals</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                    <div key={month} className="flex flex-col items-center gap-1">
                      <div className="w-8 bg-gray-200 rounded-t h-20 dark:bg-[#2D3748]" />
                      <div className="w-8 bg-blue-500 rounded-b h-12 dark:bg-[#3B82F6]" />
                      <span className="text-xs text-gray-600 dark:text-[#A0AEC0]">{month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
                <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Revenue</h3>
                <div className="flex items-center gap-4 text-sm mb-4 dark:text-[#A0AEC0]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-black dark:bg-[#FFFFFF]" />
                    <span>Current Week $58,171</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-[#A0AEC0]" />
                    <span>Previous Week $50,708</span>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-600 dark:text-[#A0AEC0]">Line Chart Placeholder</div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
                <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Revenue by Location</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-600 dark:text-[#A0AEC0]" />
                      <span className="dark:text-[#FFFFFF]">New York</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">72K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-600 dark:text-[#A0AEC0]" />
                      <span className="dark:text-[#FFFFFF]">San Francisco</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">38K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-600 dark:text-[#A0AEC0]" />
                      <span className="dark:text-[#FFFFFF]">Sydney</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">25K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-600 dark:text-[#A0AEC0]" />
                      <span className="dark:text-[#FFFFFF]">Singapore</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">58K</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
                <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Top Selling Products</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-[#FFFFFF]">ASOS Ridley High Waist</p>
                      <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">$79.49 • 82</p>
                    </div>
                    <span className="font-medium dark:text-[#FFFFFF]">$6,518.18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-[#FFFFFF]">Marco Lightweight Shirt</p>
                      <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">$128.50 • 37</p>
                    </div>
                    <span className="font-medium dark:text-[#FFFFFF]">$4,754.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-[#FFFFFF]">Half Sleeve Shirt</p>
                      <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">$39.99 • 64</p>
                    </div>
                    <span className="font-medium dark:text-[#FFFFFF]">$2,559.36</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-[#FFFFFF]">Lightweight Jacket</p>
                      <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">$20.00 • 184</p>
                    </div>
                    <span className="font-medium dark:text-[#FFFFFF]">$3,680.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-[#FFFFFF]">Marco Shoes</p>
                      <p className="text-sm text-gray-600 dark:text-[#A0AEC0]">$79.49 • 64</p>
                    </div>
                    <span className="font-medium dark:text-[#FFFFFF]">$1,965.81</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 border dark:bg-[#1A1A1A] dark:border-[#2D3748]">
                <h3 className="text-lg font-semibold mb-4 dark:text-[#FFFFFF]">Total Sales</h3>
                <div className="flex items-center justify-center h-32 mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center dark:bg-[#2D3748]">
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">38.6%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-[#A0AEC0]" />
                      <span className="text-sm dark:text-[#FFFFFF]">Direct</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">$300.56</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-[#A0AEC0]" />
                      <span className="text-sm dark:text-[#FFFFFF]">Affiliate</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">$135.18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500 dark:bg-[#A0AEC0]" />
                      <span className="text-sm dark:text-[#FFFFFF]">Sponsored</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">$154.02</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500 dark:bg-[#A0AEC0]" />
                      <span className="text-sm dark:text-[#FFFFFF]">E-mail</span>
                    </div>
                    <span className="text-sm font-medium dark:text-[#FFFFFF]">$48.96</span>
                  </div>
                </div>
              </div>
            </div>
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