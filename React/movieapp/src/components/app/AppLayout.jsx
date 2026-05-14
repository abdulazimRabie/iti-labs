import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app/AppSidebar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">

        <AppSidebar />

        <main className="flex-1 overflow-auto">
          <div className="p-3 border-b border-zinc-200 bg-white">
            <SidebarTrigger />
          </div>

          <Outlet /> 
        </main>

      </div>
    </SidebarProvider>
  );
}