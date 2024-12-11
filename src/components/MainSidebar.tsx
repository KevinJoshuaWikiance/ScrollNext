import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Import sidebar components
import { AppSidebar } from "@/components/Sidebar"; // Import the sidebar UI

export default function MainSideBar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar /> {/* This renders the sidebar */}
      <main>
        <SidebarTrigger /> {/* This triggers the sidebar (toggle action) */}
        {children} {/* Main content passed as children */}
      </main>
    </SidebarProvider>
  );
}
