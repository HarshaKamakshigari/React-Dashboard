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
  const orders = [
    {
      id: "CM9801",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
      statusColor: "bg-blue-500"
    },
    {
      id: "CM9802", 
      user: "Drew Cano",
      project: "E-commerce Site",
      address: "123 Main Street",
      date: "A minute ago",
      status: "Complete",
      statusColor: "bg-green-500"
    },
    {
      id: "CM9803",
      user: "Orlando Diggs", 
      project: "Mobile App",
      address: "456 Oak Avenue",
      date: "Yesterday",
      status: "Pending",
      statusColor: "bg-cyan-500"
    },
    {
      id: "CM9804",
      user: "Andi Lane",
      project: "Dashboard UI",
      address: "789 Pine Road",
      date: "Feb 2, 2023",
      status: "Approved",
      statusColor: "bg-yellow-500"
    },
    {
      id: "CM9805",
      user: "Kate Morrison",
      project: "Blog Platform",
      address: "321 Elm Street",
      date: "Feb 1, 2023", 
      status: "Rejected",
      statusColor: "bg-red-500"
    }
  ]

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
                  <SidebarMenuButton asChild>
                    <a href="/">
                      <BarChart3 className="h-4 w-4" />
                      <span>Default</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <ShoppingCart className="h-4 w-4" />
                    <span>eCommerce</span>
                    <ArrowUp className="h-3 w-3 ml-auto" />
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
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">Order List</h1>
            
            {/* Action Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Check className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search" className="pl-9 w-64" />
              </div>
            </div>

            {/* Order Table */}
            <div className="rounded-lg border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        <input type="checkbox" className="rounded border-gray-300" aria-label="Select all orders" />
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Order ID
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        User
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Project
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Address
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={order.id} className={`border-b ${index === 2 ? 'bg-muted/50' : ''}`}>
                        <td className="p-4">
                          <input 
                            type="checkbox" 
                            className="rounded border-gray-300" 
                            defaultChecked={index === 2}
                            aria-label={`Select order ${order.id}`}
                          />
                        </td>
                        <td className="p-4 font-medium">#{order.id}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                              <span className="text-white text-xs font-medium">
                                {order.user.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span>{order.user}</span>
                          </div>
                        </td>
                        <td className="p-4">{order.project}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span>{order.address}</span>
                            {order.id === "CM9805" && (
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{order.date}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${order.statusColor}`} />
                            <span>{order.status}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          {order.id === "CM9805" && (
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2 mt-6">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="ghost" size="sm">2</Button>
              <Button variant="ghost" size="sm">3</Button>
              <Button variant="ghost" size="sm">4</Button>
              <Button variant="ghost" size="sm">5</Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </SidebarInset>
    </>
  )
}
