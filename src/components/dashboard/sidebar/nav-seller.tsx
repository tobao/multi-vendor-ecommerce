"use client";
//Components UI
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

//Constants
import { icons } from "@/constants/icons";

//Next
import Link from "next/link";
import { usePathname } from "next/navigation";

//Types
import { DashboardSidebarMenuInterface } from "@/lib/types";

//Utils
import { cn } from "@/lib/utils";

export default function SidebarNavSeller({
  menuLinks,
}: {
  menuLinks: DashboardSidebarMenuInterface[];
}) {
  const pathname = usePathname();
  // console.log("pathname-->", pathname);

  const storeUrlStart = pathname.split("/stores/")[1];
  const activeStore = storeUrlStart ? storeUrlStart.split("/")[0] : "";
  
  return (
    <nav className="relative grow">
      <Command className="rounded-lg overflow-visible bg-transparent">
        <CommandInput placeholder="Search..." />
        <CommandList className="py-2 overflow-visible">
          <CommandEmpty>No Links Found.</CommandEmpty>
          <CommandGroup className="overflow-visible pt-0 relative">
            {menuLinks.map((link, index) => {
              let icon;
              const iconSearch = icons.find(
                (icon) => icon.value === link.icon
              );
              if (iconSearch) icon = <iconSearch.path />;
              return (
                <CommandItem key={index} className={cn("w-full h-12 cursor-pointer",{
                  "bg-accent text-accent-foreground mt-1":
                    link.link === ""
                    ? pathname === `/dashboard/seller/stores/${activeStore}`
                    : `/dashboard/seller/stores/${activeStore}/${link.link}`=== pathname
                })}>
                  <Link href={`/dashboard/seller/stores/${activeStore}/${link.link}`} className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all w-full ">
                    {icon}
                    <span>{link.label}</span>
                  </Link>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
      </Command>
    </nav>
  );
}