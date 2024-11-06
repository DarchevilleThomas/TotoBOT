"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { langs } from "@/lib/i18n";
import Image from "next/image";

export function SwitchLangButton() {
    const { t, i18n } = useTranslation();
    const currentLang = langs.find((lang) => lang.code === i18n.language);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    {currentLang && (
                        <Image src={`/icons/${currentLang.flag}`} alt={currentLang.name} width={32} height={32} />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {langs.map((lang, index) => (
                    <DropdownMenuItem key={index} onClick={() => i18n.changeLanguage(lang.code)}>
                        <Image src={`/icons/${lang.flag}`} alt={lang.name} width={32} height={32} />
                        {t(lang.name)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
