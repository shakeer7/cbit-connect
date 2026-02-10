import {
  Home,
  GraduationCap,
  Users,
  Briefcase,
  BookOpen,
  Newspaper,
  MessageSquare,
  ShoppingBag,
  CreditCard,
  Bell,
  Search,
  ChevronDown,
  Menu,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useRole, roleNames, type UserRole } from "@/contexts/RoleContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mainNav = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Student", url: "/student", icon: GraduationCap },
  { title: "Clubs", url: "/clubs", icon: Users },
  { title: "Alumni & RFC", url: "/alumni", icon: Users },
  { title: "Placements", url: "/placements", icon: Briefcase },
  { title: "Faculty", url: "/faculty", icon: BookOpen },
  { title: "News", url: "/news", icon: Newspaper },
];

const communityNav = [
  { title: "Doubt Forum", url: "/forum", icon: MessageSquare },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingBag },
  { title: "Feedback & Polls", url: "/feedback", icon: CreditCard },
];

const utilityNav = [
  { title: "Student ID", url: "/student-id", icon: CreditCard },
  { title: "Notifications", url: "/notifications", icon: Bell },
];

const roles: UserRole[] = ["student", "alumni", "faculty", "club_admin", "college_admin"];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { role, setRole, roleName } = useRole();

  const renderNavItems = (items: typeof mainNav) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <NavLink
            to={item.url}
            end={item.url === "/"}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-sidebar-accent"
            activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-sm">
              CB
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-sidebar-foreground">CBIT Connect</h2>
              <p className="text-[10px] text-sidebar-foreground/60">Digital Campus Hub</p>
            </div>
          </div>
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-xs mx-auto">
            CB
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-[10px] uppercase tracking-wider">
            {!collapsed && "Main"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderNavItems(mainNav)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-[10px] uppercase tracking-wider">
            {!collapsed && "Community"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderNavItems(communityNav)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-[10px] uppercase tracking-wider">
            {!collapsed && "Utilities"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderNavItems(utilityNav)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {!collapsed ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-sidebar-accent transition-colors">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs">
                    {roleName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-xs font-medium text-sidebar-foreground">Ravi Kumar</p>
                  <p className="text-[10px] text-sidebar-foreground/60">{roleName}</p>
                </div>
                <ChevronDown className="h-3 w-3 text-sidebar-foreground/50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {roles.map((r) => (
                <DropdownMenuItem
                  key={r}
                  onClick={() => setRole(r)}
                  className={role === r ? "bg-accent font-medium" : ""}
                >
                  {roleNames[r]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Avatar className="h-7 w-7 mx-auto">
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs">
              {roleName[0]}
            </AvatarFallback>
          </Avatar>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
