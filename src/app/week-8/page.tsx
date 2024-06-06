import Breadcrumbs from '@/components/breadcrumbs'
import { Paragraph, ParagraphContent, ParagraphHeader, ParagraphSeparator } from '@/components/paragraph'
import Link from 'next/link'
import React from 'react'

export default function Week8() {
    return (
        <main className="relative h-screen pt-14">
            <section className="container mx-auto flex max-w-[980px] flex-col gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
                <Breadcrumbs />
                <div className="mb-6 flex w-full items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tighter md:text-4xl">Mini-Essay 3</h1>
                </div>

                <Paragraph id="intro">
                    <ParagraphHeader title="Introduction" />
                    <ParagraphSeparator />
                    <ParagraphContent>
                        At my job, there&apos;s no shortage of documentation &amp; prototyping that needs to be completed before any project can be started. Because of this, I&apos;m familiar with the concepts of low and high fidelity prototyping, though before this class, not by name. Frequently, we have a new project concept which needs a documentation write-up followed by a simple wireframe displaying the locations for content and broad ideas for navigation style, link placements, etc.
                    </ParagraphContent>
                </Paragraph>
                <Paragraph id="knawlige">
                    <ParagraphHeader title="What I've Learned" />
                    <ParagraphSeparator />
                    <ParagraphContent>
                        Something I learned about this stage of prototyping in this class is that I&apos;ve probably been too high-fidelity in my early prototypes <Link className="text-purple underline" href="https://viewer.books24x7.com/assetviewer.aspx?bookid=146076&chunkid=460710878&resumebookmarkid=c82abef9-90f8-ee11-aa7d-005056b543a4" target="_blank">(Sharp et. al. Chapter 12, section 2.3)</Link>. I&apos;d often include placeholder images, wordy navigation links, icon designs, and more where it was really unnecessary and often ended up being discarded in later prototypes. Essentially, I went too hard on the design aspect of what is inherently supposed to be a mock with rectangles to get the concept out there. For GP3, these trends carried over, and our low fidelity prototype ended up looking pretty high fidelity, requiring me to revise it to look more basic, which is a waste of time. Learning from this, I&apos;ll start with nothing but boxes and shapes to denote what kind of content should be on the page instead of playing with color schemes and wording for various tabs and pages in the app.
                    </ParagraphContent>
                    <ParagraphContent>
                        Additionally, I learned that trying to be as time efficient as possible can really weaken the structure of your prototype. For example, I had many other assignments to do, so when we decided we wanted to have an Education and History tab, I initially just copied the entire design over and changed around some very minor things. As the author notes, “When a project is under pressure, it can become tempting to integrate a set of existing high-fidelity prototypes together to form the final product” <Link className="text-purple underline" href="https://viewer.books24x7.com/assetviewer.aspx?bookid=146076&chunkid=460710878&resumebookmarkid=c82abef9-90f8-ee11-aa7d-005056b543a4" target="_blank">(Sharp et. al. Chapter 12, section Dilemma)</Link>. Eventually, this felt cluttered and wrong, and we had to spend extra time going back to revise it.
                    </ParagraphContent>
                    <ParagraphContent>
                        GP3 Also helped me notice that while my ego is pretty big for prototypes because of my line of work &amp; experience, others&apos; input is essential to have a well-rounded, thoughtful design. I work in a very small team at <Link className="text-purple underline" href="https://leapbrands.io" target="_blank">Leap</Link>, and because of that, most of our design is done by me, passed along to the other 2 developers, and they&apos;ll give their comments. But at the end of the day, I work for a startup, where the MVP is much more important than the UI/UX, at least in the early stages of a new project. Nobody really cares too much how things look as long as the UI is pretty intuitive and clean, so I rarely get any pushback. To be specific, Jude made some excellent comments about things I never thought about, like recommending a more rounded/bubbly font for the UI (we went from Inter to DM Sans) because we weren&apos;t trying to create the impression of a serious business, but a playful, user-friendly app to identify species. This reminded me of the through-course question 7, what makes a team work well? And ultimately, I have a better appreciation for thoughtful input and will bring this idea to my company for more comprehensive design reviews.
                    </ParagraphContent>
                </Paragraph>
                <Paragraph id="reflection">
                    <ParagraphHeader title="Reflection" />
                    <ParagraphSeparator />
                    <ParagraphContent>
                        Through this course and my experience with GP3, I have gained valuable insights into the importance of balancing fidelity in prototypes. I&apos;ve realized that high-fidelity elements can be a large hindrance in the early stages of design, leading to wasted time and effort, compacted by the need for future revisions. Embracing low-fidelity prototyping with simple shapes and boxes is shown to be more effective for initial concepts. Additionally, I have come to understand the significance of collaborative input despite my experience and confidence in my design abilities. I have learned to value and integrate feedback from my peers, which ultimately leads to more thoughtful designs.
                    </ParagraphContent>
                </Paragraph>
                <Paragraph id="conclusion">
                    <ParagraphHeader title="Conclusion" />
                    <ParagraphSeparator />
                    <ParagraphContent>
                        This journey has broadened my perspective on the design process, highlighting the significance of understanding user needs and valuing collaborative input. Moving forward, I&apos;m eager to apply these principles, focusing on refining core concepts and fostering a more inclusive design environment. This course has given me a clearer vision of how to create impactful and user-centered designs, and I&apos;m excited to see how these lessons will shape my future projects.
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
