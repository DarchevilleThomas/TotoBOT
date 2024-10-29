import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StoreProvider from "@/components/providers/store-provider";

export const metadata: Metadata = {
    title: "TOTO BOT",
    description: "Le bot officiel de TOTO"
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <StoreProvider>
                {children}
            </StoreProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
