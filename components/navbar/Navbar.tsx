'use client';

import { SwitchThemeButton } from "@/components/buttons/switch-theme-button";
import { SwitchLangButton } from "@/components/buttons/switch-lang-button";

export default function Navbar() {
    return (
        <nav className="bg-darker flex h-24 items-center justify-between px-5 lg:px-32">
            <text className="text-white text-3xl font-bold">TOTOBOT</text>
            <div className="flex gap-5">
                <SwitchLangButton />
                <SwitchThemeButton />
            </div>
        </nav>
    );
}