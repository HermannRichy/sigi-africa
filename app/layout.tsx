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
    title: "SIGI AFRICA - Agence Immobilière",
    description:
        "SIGI AFRICA, votre agence immobilière de confiance pour trouver la maison de vos rêves en Afrique.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    openGraph: {
        title: "SIGI AFRICA - Agence Immobilière",
        description:
            "SIGI AFRICA, votre agence immobilière de confiance pour trouver la maison de vos rêves en Afrique.",
        url: "https://sigi.africa",
        siteName: "SIGI AFRICA",
        type: "website",
        locale: "fr_FR",
        images: [
            {
                url: "https://sigi.africa/images/hero-img-2.png",
                width: 1200,
                height: 630,
                alt: "SIGI AFRICA - Agence Immobilière",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SIGI AFRICA - Agence Immobilière",
        description:
            "SIGI AFRICA, votre agence immobilière de confiance pour trouver la maison de vos rêves en Afrique.",
        images: ["https://sigi.africa/images/hero-img-2.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
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
