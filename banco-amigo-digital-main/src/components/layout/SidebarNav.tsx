
import { Home, CreditCard, Send, Activity, Settings, LogOut } from "lucide-react";
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Menu items
const navItems = [
  {
    title: "Início",
    icon: Home,
    href: "/",
  },
  {
    title: "Cartões",
    icon: CreditCard,
    href: "/cards",
  },
  {
    title: "Transferências",
    icon: Send,
    href: "/transfers",
  },
  {
    title: "Atividade",
    icon: Activity,
    href: "/activity",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/settings",
  },
];

export function SidebarNav() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-bank flex items-center justify-center">
            <span className="font-bold text-white">DB</span>
          </div>
          <span className="font-bold text-lg">Digital Bank</span>
        </div>
        <SidebarTrigger className="absolute right-2 top-4 lg:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <Button variant="outline" className="w-full flex gap-2" size="sm">
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
