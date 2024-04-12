import Breadcrumbs from '@/components/breadcrumbs'
import { Paragraph, ParagraphContent, ParagraphHeader, ParagraphSeparator } from '@/components/paragraph'
import Link from 'next/link'
import React from 'react'

export default function Week2() {
	return (
		<main className="relative h-screen pt-14">
			<section className="container mx-auto flex max-w-[980px] flex-col gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
				<Breadcrumbs />
				<div className="mb-6 flex w-full items-center justify-between">
					<h1 className="text-2xl font-bold tracking-tighter md:text-4xl">Mini-Essay 1</h1>
				</div>

				<Paragraph id="intro">
					<ParagraphHeader title="Introduction" />
					<ParagraphSeparator />
					<ParagraphContent>
						For context, I work at a startup recruiting agency as a remote front-end developer in a very small team. I&apos;ve been a half-decent web developer for about a year now, and at times I&apos;ve been coaxed into the position of a designer as well. In week 1, my understanding of HCD was limited to vague notions of putting users at the center of the design process, remembering to add accessibility features, and finding a good color scheme. But as I delved deeper into the course material, I&apos;ve realized that HCD involves a holistic approach to design that emphasizes empathy, iteration, and collaboration.
					</ParagraphContent>
				</Paragraph>
				<Paragraph id="knawlige">
					<ParagraphHeader title="What I've Learned" />
					<ParagraphSeparator />
					<ParagraphContent>
						Involving user feedback in the design process is essential for creating solutions that truly connect with users. As discussed in the textbook, TiVo&apos;s product design director engaged potential users in the design process, gathering their input on various aspects of the device, such as its feel and battery placement <Link className="text-purple underline" href="https://viewer.books24x7.com/assetviewer.aspx?bookid=146076&chunkid=460710878&resumebookmarkid=c82abef9-90f8-ee11-aa7d-005056b543a4" target="_blank">(Sharp et al. Chapter 1, section 1.2.2)</Link>. I&apos;m a little too young or too uncultured to have used TiVo, but considering I thought figure 1.2 in the textbook was my own remote, I&apos;d say it was a success. This underscores the significance of actively involving users in the design process to let their feedback shape and improve the final product.
					</ParagraphContent>
					<ParagraphContent>
						The separation between good and bad design seems intuitive enough; ineffective design lacks a user-centered approach, leading to solutions that miss the mark and fall short of meeting user expectations. Meanwhile, effective design involves thoroughly considering user needs and limitations and crafting solutions that fulfill those needs seamlessly.
					</ParagraphContent>
					<ParagraphContent>
						The textbook&apos;s distinction between usability and user experience is pretty easy to follow. Usability focuses on making interactive products efficient and safe, while UX looks at the overall experience of users, like satisfaction or annoyance from an interaction. Usability makes sure products are easy to learn and use, while UX enhances the quality of interaction and creates subconscious or (hopefully) conscious positive connections with the product or service <Link className="text-purple underline" href="https://viewer.books24x7.com/assetviewer.aspx?bookid=146076&chunkid=460710878&resumebookmarkid=c82abef9-90f8-ee11-aa7d-005056b543a4" target="_blank">(Sharp et al. Chapter 1, section 1.4)</Link>.
					</ParagraphContent>
				</Paragraph>
				<Paragraph id="reflection">
					<ParagraphHeader title="Reflection" />
					<ParagraphSeparator />
					<ParagraphContent>
						I&apos;ve been reflecting on my approach to development, especially when faced with time constraints that prioritize usability over user experience. In my role at the startup, I often have to focus on delivering minimum viable products (MVPs) within tight deadlines, which almost always means prioritizing functional usability over user experience. However, as I learn more about human-centered design, I understand the importance of balancing efficiency and user satisfaction. In the future, I plan to incorporate elements of user experience design even when time is limited... until my boss gently reminds me of the looming deadlines, of course.
					</ParagraphContent>
				</Paragraph>
				<Paragraph id="conclusion">
					<ParagraphHeader title="Conclusion" />
					<ParagraphSeparator />
					<ParagraphContent>
						I&apos;m starting to see the bigger picture behind this whole HCD process beyond toiling over color schemes for hours and adding those last minute accessibility features. It&apos;s about understanding users&apos; needs on a deeper level, tirelessly refining my approach to UX, and working in a multi-disciplinary team to create solutions that resonate with users of all backgrounds. I&apos;m excited to see what&apos;s ahead in this course, and I&apos;m pretty confident that each class will help mold me into a more thoughtful and impactful designer.
					</ParagraphContent>
				</Paragraph>

				<div className="mt-10">
					<Paragraph id="Citations">
						<div className="rounded-md border bg-card px-4 py-2 shadow">
							<ParagraphHeader title="Citations" />
							<ParagraphContent className="mb-0 mt-2">
								Sharp, Helen, et al. Interaction Design: Beyond Human-Computer Interaction. 5th ed., John Wiley &amp; Sons, 2019.
							</ParagraphContent>
						</div>
					</Paragraph>
				</div>
			</section>
		</main>)
}
