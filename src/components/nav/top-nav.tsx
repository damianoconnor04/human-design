import React from 'react'
import { ModeToggle } from '../mode-toggle'
import ArchiveDropdown from './archive-dropdown'
import { sans } from '@/app/layout'

export default function TopNav() {
	return (
		<header className="bg-background/65 absolute left-0 top-0 z-50 w-full border-b backdrop-blur">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
				<ArchiveDropdown sansFont={sans} />
				<ModeToggle />
			</div>
		</header>
	)
}
