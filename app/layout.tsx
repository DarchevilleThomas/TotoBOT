import { SettingModal } from "@/components/modal/SettingModal";
import Navbar from "@/components/navbar/Navbar";
import { APIKeysProvider } from "@/components/providers/apikeys-provider";
import I18nProvider from "@/components/providers/i18n-provider";
import StoreProvider from "@/components/providers/store-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="fr" suppressHydrationWarning>
            <body className="bg-background flex flex-col min-h-screen">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <I18nProvider>
                        <StoreProvider>
                            <APIKeysProvider>
                                <Navbar />
                                <SettingModal />
                                <main className="flex-grow flex flex-col">{children}</main>
                                <Toaster />
                            </APIKeysProvider>
                        </StoreProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
