import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StoreProvider from "@/components/providers/store-provider";
import I18nProvider from "@/components/providers/i18n-provider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="fr">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <I18nProvider>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </I18nProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
