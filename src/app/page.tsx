import Sun from '@/components/sun'
import { Button } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
	return (
		<main className="relative h-screen overflow-hidden pt-14">
			<section className="container mx-auto flex min-h-full max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
				<h1 className="text-center text-3xl font-bold tracking-tighter md:text-6xl md:leading-[1.15]">INFO 310</h1>
				<span className="max-w-[750px] text-center text-lg text-muted-foreground md:text-2xl">A collection of mini-essays and other assignments I&apos;d prefer not to write in a traditional essay format</span>

				<div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
					<Button asChild>
						<Link href="/week-8">
							This Week
						</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/archive">
							View Archive
						</Link>
					</Button>
				</div>
			</section>

			<span className="absolute bottom-4 right-4 text-sm text-muted-foreground">
				<Button variant="ghost" size="icon" asChild>
					<Link target="_blank" href="https://github.com/damianoconnor04/human-design">
						<GitHubLogoIcon className="h-5 w-5" />
					</Link>
				</Button>
			</span>

			<Image priority quality={60} src="/noise.webp" alt="background noise" fill aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-75" />
			<Sun className="absolute -bottom-1/2 left-1/2 w-[50vw] -translate-x-1/2 opacity-50" />
		</main >
	)
}
