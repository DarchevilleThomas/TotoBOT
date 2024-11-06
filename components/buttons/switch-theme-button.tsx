"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export function SwitchThemeButton() {
    const { setTheme } = useTheme();

    const { t } = useTranslation();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default" size="icon">
                    <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[6rem] w-[6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>{t("Light")}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>{t("Dark")}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>{t("System")}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
