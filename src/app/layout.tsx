import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ambuj Kumar Chaubey | Associate Data Engineer",
    template: "%s | Ambuj Kumar Chaubey",
  },
  description:
    "Associate Data Engineer at R Systems International with expertise in Python, SQL, Power BI, Machine Learning, Cloud Computing, and Data Analytics. Building enterprise-grade migration tools and AI-powered platforms.",
  keywords: [
    "Ambuj Kumar Chaubey",
    "Data Engineer",
    "Python Developer",
    "Machine Learning",
    "Cloud Computing",
    "Power BI",
    "SQL",
    "Portfolio",
    "R Systems",
    "Data Analytics",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ambuj Kumar Chaubey" }],
  creator: "Ambuj Kumar Chaubey",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ambuj Kumar Chaubey | Associate Data Engineer",
    description:
      "Associate Data Engineer with expertise in Python, SQL, ML, and Cloud. Building enterprise migration tools and AI platforms.",
    siteName: "Ambuj Kumar Chaubey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambuj Kumar Chaubey | Associate Data Engineer",
    description:
      "Associate Data Engineer with expertise in Python, SQL, ML, and Cloud.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#030712" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="noise min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
