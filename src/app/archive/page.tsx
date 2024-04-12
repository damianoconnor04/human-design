import Breadcrumbs from '@/components/breadcrumbs'
import Image from 'next/image'
import React from 'react'

export default function Archive() {
	return (
		<main className="relative h-screen pt-14">
			<section className="container mx-auto flex h-full max-w-[980px] flex-col gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
				<Breadcrumbs />
				<div className="mb-6 flex w-full items-center justify-between">
					<h1 className="text-2xl font-bold tracking-tighter md:text-4xl">Archive</h1>
				</div>
				<div className="flex h-full w-full flex-col items-center justify-center gap-2">
					<Image unoptimized width={256} height={312} src="./giphy.gif" alt="coming soon graphic" />
					<span className="font-medium text-muted-foreground">Coming soon</span>
				</div>
			</section>
		</main>
	)
}
