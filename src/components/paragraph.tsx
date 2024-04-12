import { cn } from '@/lib/utils';
import React from 'react'

type ParagraphProps = {
	id: string;
	children: React.ReactNode;
}
function Paragraph({ id, children }: ParagraphProps) { return (<div id={id}>{children}</div>) }
type ParagraphHeaderProps = {
	title: string;
	children?: React.ReactNode;
}
function ParagraphHeader({ title, children }: ParagraphHeaderProps) {
	return (
		<div className="group flex w-full items-center justify-between">
			<h1 className="text-left text-lg font-bold tracking-tight md:text-2xl md:leading-[1.15]">{title}</h1>
			{children}
		</div>
	)
}
function ParagraphSeparator() { return <div className="mb-2 mt-1.5 h-px w-full rounded-lg bg-border" /> }
function ParagraphContent({ children, className }: { children: React.ReactNode, className?: string }) { return (<p className={cn("mb-8 text-base text-primary/80 md:text-lg", className)}>{children}</p>) }

export {
	Paragraph,
	ParagraphHeader,
	ParagraphSeparator,
	ParagraphContent,
}
