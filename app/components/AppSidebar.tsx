import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  WalletCards,
  Home,
  ArrowLeftRight,
  Activity,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Credit Cards",
    url: "/dashboard/credit-cards",
    icon: WalletCards,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Categories",
    url: "/dashboard/categories",
    icon: ShoppingBag,
  },
  {
    title: "Stocks",
    url: "/dashboard/stocks",
    icon: Activity,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="font-bold text-2xl text-sky-400 px-4">Finance Tracker</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "transition-colors duration-200",
                        isActive && "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-medium rounded-sm"
                      )}
                    >
                      <a href={item.url}>
                        <item.icon className={cn(
                          "transition-colors duration-200",
                          isActive && "text-sky-600 dark:text-sky-400"
                        )} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
