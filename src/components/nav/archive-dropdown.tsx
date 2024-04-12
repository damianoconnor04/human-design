"use client";
import React from "react";
import { AccessibilityIcon } from '@radix-ui/react-icons'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { NavItem } from './nav-item'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NextFont } from "next/dist/compiled/@next/font";

export default function ArchiveDropdown({ sansFont }: { sansFont: NextFont }) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuTrigger className="w-fit !bg-transparent p-1 px-2">
							<span className={cn("flex items-center text-3xl font-extrabold uppercase leading-none tracking-tighter", sansFont.className)}>
								<AccessibilityIcon className="h-8 w-8 text-purple" />
								&nbsp;Design
							</span>
						</NavigationMenuTrigger>
					</Link>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="group flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-bl from-muted/30 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/archive"
									>
										<div className="flex h-auto w-[2.75rem] flex-wrap gap-1">
											<div className="h-4 w-4 rounded-md bg-primary/60 transition-all duration-200 ease-in-out group-hover:w-6 group-hover:bg-purple/50" />
											<div className="h-4 w-6 rounded-md bg-border transition-all duration-200 ease-in-out group-hover:w-4 group-hover:bg-purple" />
											<div className="h-6 w-2 rounded-md bg-border transition-all duration-200 ease-in-out group-hover:w-8 group-hover:bg-purple" />
											<div className="h-6 w-8 rounded-md bg-primary/60 transition-all duration-200 ease-in-out group-hover:w-2 group-hover:bg-purple/50" />
										</div>
										<div className="mb-1 mt-3 text-lg font-medium">
											The Archive
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											View all publications on this site
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<NavItem href="/week-2" title="Week 2 Mini Essay">
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
							</NavItem>
							<NavItem href="/placeholder" title="Placeholder">
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
							</NavItem>
							<NavItem href="/placeholder" title="Placeholder">
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
							</NavItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu >
	)
}
