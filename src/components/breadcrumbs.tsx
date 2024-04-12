"use client";
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb'
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
	const pathname = usePathname();
	const segments = pathname.split('/').filter(segment => segment !== '');
	const formattedSegments = segments.map(segment =>
		segment
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				{formattedSegments.map((segment, index) => (
					<BreadcrumbItem key={index}>
						<BreadcrumbLink href={`/${segments[index]}`}>
							{segment}
						</BreadcrumbLink>
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
