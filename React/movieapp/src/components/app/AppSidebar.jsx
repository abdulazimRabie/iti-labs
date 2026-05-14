import { Film, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { useSelector } from "react-redux";

const NAV_ITEMS = [
  { label: "Movies", icon: Film, to: "/movies" },
  { label: "Favorites", icon: Heart, to: "/favorites" },
];

const LOGO = "azimmovie";

function AppSidebar() {
  const fav_counts = useSelector((state) => state.favorite.ids.length);

  return (
    <Sidebar>
      <SidebarHeader className="px-5 py-4 border-b border-zinc-200">
        <span className="text-lg font-bold text-zinc-900 tracking-tight">
          🎬 {LOGO}
        </span>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu>
          {NAV_ITEMS.map(({ label, icon: Icon, to }) => (
            <SidebarMenuItem key={to}>
              <NavLink to={to}>
                {({ isActive }) => (
                  <SidebarMenuButton
                    isActive={isActive}
                    className="w-full flex justify-between items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <div className="flex gap-x-1 items-center">
                      <Icon size={18} />
                      {label}
                    </div>

                    <div className="bg-red-400 p-1 rounded-sm text-white">
                      {label == "Favorites" ? fav_counts : ""}
                    </div>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
