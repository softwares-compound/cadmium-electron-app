"use client"
import * as React from "react"
import {
    BookOpen,
    Bot,
    Command,
    // Frame,
    LifeBuoy,
    // Map,
    // PieChart,
    Send,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
// import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import CustomLink from "@/components/ui/link"

const data = {
    user: {
        name: "Rosterly",
        email: "resources@rosterly.io",
        avatar: "@/public/rosterly.png",
    },
    navMain: [
        {
            title: "Log Analysis",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Explorer",
                    url: "#",
                    // badge: "new",
                },
                {
                    title: "Analyze",
                    url: "#",
                    badge: "beta",
                },
                {
                    title: "Configure",
                    url: "#",
                    badge: "soon",
                },
            ],
        },
        {
            title: "Code Analysis",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                    badge: "soon",
                },
                {
                    title: "Explorer",
                    url: "#",
                    badge: "soon",
                },
                {
                    title: "Quantum",
                    url: "#",
                    badge: "soon",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                    badge: "soon",
                },
                {
                    title: "Get Started",
                    url: "#",
                    badge: "soon",
                },
                {
                    title: "Tutorials",
                    url: "#",
                    badge: "soon",
                },
                {
                    title: "Changelog",
                    url: "#",
                    badge: "soon",
                },
            ],
        },
        {
            title: "Unit Testing",
            url: "#",
            icon: Settings2,
            // items: [
            //     {
            //         title: "General",
            //         url: "#",
            //     },
            //     {
            //         title: "Team",
            //         url: "#",
            //     },
            //     {
            //         title: "Billing",
            //         url: "#",
            //     },
            //     {
            //         title: "Limits",
            //         url: "#",
            //     },
            // ],
        },
        {
            title: "Security and Vulnerabilities",
            url: "#",
            icon: Settings2,
            // items: [
            //     {
            //         title: "General",
            //         url: "#",
            //     },
            //     {
            //         title: "Team",
            //         url: "#",
            //     },
            //     {
            //         title: "Billing",
            //         url: "#",
            //     },
            //     {
            //         title: "Limits",
            //         url: "#",
            //     },
            // ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    // projects: [
    //     {
    //         name: "Design Engineering",
    //         url: "#",
    //         icon: Frame,
    //     },
    //     {
    //         name: "Sales & Marketing",
    //         url: "#",
    //         icon: PieChart,
    //     },
    //     {
    //         name: "Travel",
    //         url: "#",
    //         icon: Map,
    //     },
    // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <CustomLink to="/rosterly/projects/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Acme Inc</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </CustomLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
