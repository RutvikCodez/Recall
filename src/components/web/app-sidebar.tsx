'use client'
import { NavPrimary } from '#/components/web/nav-primary'
import { NavUser } from '#/components/web/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '#/components/ui/sidebar'
import {
  BookmarkIcon,
  Import,
  Compass,
} from 'lucide-react'
import { Link, linkOptions } from '@tanstack/react-router'
import type { NavPrimaryProps } from '#/lib/types'
import type { User } from 'better-auth'

const navItems: NavPrimaryProps['projects'] = linkOptions([
  {
    icon: BookmarkIcon,
    title: 'Items',
    to: '/dashboard/items',
    activeOptions: {exact: false}
  },
  {
    icon: Import,
    title: 'Import',
    to: '/dashboard/import',
    activeOptions: {exact: false}
  },
  {
    icon: Compass,
    title: 'Discover',
    to: '/dashboard/discover',
    activeOptions: {exact: false}
  },
])

export function AppSidebar({ user }: { user: User }) {
  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={'lg'} asChild>
              <Link to="/dashboard" className="flex items-center gap-3">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BookmarkIcon className="size-4 " />
                </div>
                <div className="flex-1 text-left grid text-sm leading-tight">
                  <span className="font-medium">Recall</span>
                  <span className="text-xs">Your AI Knowledge Base</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPrimary projects={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
