import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useRole } from "@/contexts/RoleContext";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  const { roleName } = useRole();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b bg-background/95 backdrop-blur px-4">
            <SidebarTrigger />
            <div className="flex-1 flex items-center gap-3">
              <div className="relative hidden sm:block max-w-sm flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search anything..."
                  className="pl-9 h-9 bg-muted/50 border-0 focus-visible:ring-1"
                />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground border-l pl-3">
              <span>Viewing as</span>
              <span className="font-semibold text-foreground">{roleName}</span>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
