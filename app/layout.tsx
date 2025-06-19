import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/src/components/ui/theme-provider";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
});

const allenoire = localFont({
    src: "../public/fonts/Allenoire.woff2",
    variable: "--font-allenoire",
    display: "swap",
    weight: "400",
    style: "normal",
});

export const metadata: Metadata = {
    title: "SIGI AFRICA",
    description: "Agence Immobilière",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${montserrat.variable} ${allenoire.variable} antialiased font-montserrat`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
