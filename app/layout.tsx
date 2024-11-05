import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StoreProvider from "@/components/providers/store-provider";
import I18nProvider from "@/components/providers/i18n-provider";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="fr">
        <body className="bg-background flex flex-col min-h-screen">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <I18nProvider>
                <StoreProvider>
                    <Navbar />
                    <main className="flex-grow flex flex-col">
                        {children}
                    </main>
                </StoreProvider>
            </I18nProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
