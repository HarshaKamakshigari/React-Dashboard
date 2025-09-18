// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
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
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Star className="h-4 w-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">ByeWind</span>
              <span className="truncate text-xs">Dashboard</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Favorites</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <BarChart3 className="h-4 w-4" />
                    <span>Default</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/orders">
                      <ShoppingCart className="h-4 w-4" />
                      <span>eCommerce</span>
                      <ArrowUp className="h-3 w-3 ml-auto" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <TrendingUp className="h-4 w-4" />
                    <span>Projects</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LineChart className="h-4 w-4" />
                    <span>Online Courses</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Pages</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users className="h-4 w-4" />
                    <span>User Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home className="h-4 w-4" />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <TrendingUp className="h-4 w-4" />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <DollarSign className="h-4 w-4" />
                    <span>Campaigns</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="h-4 w-4" />
                    <span>Documents</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users className="h-4 w-4" />
                    <span>Followers</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>Account</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>Corporate</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>Blog</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>Social</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-4 border-b px-6">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Dashboards</span>
            <span>/</span>
            <span className="text-foreground">Default</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search" className="pl-9 w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Clock className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto bg-background">
          <div className="flex">
            <div className="flex-1 p-6">
              <h1 className="text-3xl font-bold mb-8">eCommerce</h1>
            
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Customers</p>
                    <p className="text-3xl font-bold">3,781</p>
                    <div className="flex items-center gap-1 mt-2">
                      <ArrowUp className="h-3 w-3" />
                      <span className="text-sm">+11.01%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-card p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Orders</p>
                    <p className="text-3xl font-bold">1,219</p>
                    <div className="flex items-center gap-1 mt-2">
                      <ArrowDown className="h-3 w-3 text-red-500" />
                      <span className="text-sm text-red-500">-0.03%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-card p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Revenue</p>
                    <p className="text-3xl font-bold">$695</p>
                    <div className="flex items-center gap-1 mt-2">
                      <ArrowUp className="h-3 w-3 text-green-500" />
                      <span className="text-sm text-green-500">+15.03%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-card p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Growth</p>
                    <p className="text-3xl font-bold">30.1%</p>
                    <div className="flex items-center gap-1 mt-2">
                      <ArrowUp className="h-3 w-3 text-green-500" />
                      <span className="text-sm text-green-500">+6.08%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Projections vs Actuals Chart */}
              <div className="rounded-lg bg-card p-6 border">
                <h3 className="text-lg font-semibold mb-4">Projections vs Actuals</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
                    <div key={month} className="flex flex-col items-center gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="w-8 bg-muted rounded-t h-20" />
                        <div className="w-8 bg-primary rounded-b h-12" />
                      </div>
                      <span className="text-xs text-muted-foreground">{month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Line Chart */}
              <div className="rounded-lg bg-card p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Revenue</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span>Current Week $58,211</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                      <span>Previous Week $68,768</span>
                    </div>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-muted-foreground">Line Chart Placeholder</div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue by Location */}
              <div className="rounded-lg bg-card p-6 border">
                <h3 className="text-lg font-semibold mb-4">Revenue by Location</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>New York</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-3/4 h-full bg-primary rounded-full" />
                      </div>
                      <span className="text-sm font-medium">72K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>San Francisco</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-1/2 h-full bg-primary rounded-full" />
                      </div>
                      <span className="text-sm font-medium">39K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Sydney</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-1/3 h-full bg-primary rounded-full" />
                      </div>
                      <span className="text-sm font-medium">25K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Singapore</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-2/3 h-full bg-primary rounded-full" />
                      </div>
                      <span className="text-sm font-medium">61K</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Selling Products */}
              <div className="rounded-lg bg-card p-6 border">
                <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ASOS Ridley High Waist</p>
                      <p className="text-sm text-muted-foreground">$79.49 • 82</p>
                    </div>
                    <span className="font-medium">$6,518.18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marco Lightweight Shirt</p>
                      <p className="text-sm text-muted-foreground">$128.50 • 37</p>
                    </div>
                    <span className="font-medium">$4,754.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Half Sleeve Shirt</p>
                      <p className="text-sm text-muted-foreground">$39.99 • 64</p>
                    </div>
                    <span className="font-medium">$2,559.36</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Lightweight Jacket</p>
                      <p className="text-sm text-muted-foreground">$20.00 • 184</p>
                    </div>
                    <span className="font-medium">$3,680.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marco Shoes</p>
                      <p className="text-sm text-muted-foreground">$79.49 • 64</p>
                    </div>
                    <span className="font-medium">$1,965.81</span>
                  </div>
                </div>
              </div>

              {/* Total Sales Donut Chart */}
              <div className="rounded-lg bg-card p-6 border">
                <h3 className="text-lg font-semibold mb-4">Total Sales</h3>
                <div className="flex items-center justify-center h-32 mb-4">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">38.6%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm">Direct</span>
                    </div>
                    <span className="text-sm font-medium">$300.56</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-sm">Affiliate</span>
                    </div>
                    <span className="text-sm font-medium">$135.18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-sm">Sponsored</span>
                    </div>
                    <span className="text-sm font-medium">$154.02</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-sm">E-mail</span>
                    </div>
                    <span className="text-sm font-medium">$48.96</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="w-80 border-l bg-card">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-6">Notifications</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Bug className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">You have a bug that needs...</p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <UserPlus className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">New user registered</p>
                      <p className="text-xs text-muted-foreground">59 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Bug className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">You have a bug that needs...</p>
                      <p className="text-xs text-muted-foreground">12 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Wifi className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Andi Lane subscribed to you</p>
                      <p className="text-xs text-muted-foreground">Today, 11:59 AM</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-semibold mb-6">Activities</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">J</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">You have a bug that needs...</p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">A</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Released a new version</p>
                      <p className="text-xs text-muted-foreground">59 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">M</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Submitted a bug</p>
                      <p className="text-xs text-muted-foreground">12 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">K</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Modified A data in Page X</p>
                      <p className="text-xs text-muted-foreground">Today, 11:59 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">L</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Deleted a page in Project X</p>
                      <p className="text-xs text-muted-foreground">Feb 2, 2023</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-semibold mb-6">Contacts</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">NC</span>
                    </div>
                    <span className="text-sm">Natali Craig</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">DC</span>
                    </div>
                    <span className="text-sm">Drew Cano</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">OD</span>
                    </div>
                    <span className="text-sm">Orlando Diggs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">AL</span>
                    </div>
                    <span className="text-sm">Andi Lane</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">KM</span>
                    </div>
                    <span className="text-sm">Kate Morrison</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">KO</span>
                    </div>
                    <span className="text-sm">Koray Okumus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </>
  )
}
