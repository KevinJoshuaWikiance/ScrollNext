import { Calendar, Home, Inbox, Search, Settings, SettingsIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Content } from "@radix-ui/react-dialog"

// Menu items.
// const items = [
//   {
//     title: "Page1",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
//   {
//     title: "Content",
//     url: "#",
//     icon: SettingsIcon,
//   },
// ]

const items:any[] = [];
for(let i = 1; i<=15 ; i++){
items[i] = 
{
  title: `Page ${i}`,
  url: "#",
  icon: Inbox,
}
}

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <SidebarContent className="bg-blue-950 text-white">
        <SidebarGroup >
          <SidebarGroupLabel className="text-white"></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="m-2 " >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon  />
                      <span className="text-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
