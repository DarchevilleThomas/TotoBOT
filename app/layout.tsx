import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StoreProvider from "@/components/providers/store-provider";
import I18nProvider from "@/components/providers/i18n-provider";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="fr">
        <body className="dark:bg-secondary bg-secondary">
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <I18nProvider>
                    <StoreProvider>
                        <Navbar />
                        {children}
                    </StoreProvider>
                </I18nProvider>
            </ThemeProvider>
        </body>
        </html>
    );
}
