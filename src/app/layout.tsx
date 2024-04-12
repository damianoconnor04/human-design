import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import TopNav from "@/components/nav/top-nav";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
const sans = DM_Sans({ subsets: ["latin"] });

export { inter, sans };

export const metadata: Metadata = {
	title: "OCMC Counseling",
	description: "Bianca O'Connor McDermott is a Licensed Professional Counselor providing mental health and aging psychotherapy by telehealth in Pennsylvania.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen antialiased")} suppressHydrationWarning>
				<NextTopLoader
					shadow="none"
					showAtBottom
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<TopNav />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

