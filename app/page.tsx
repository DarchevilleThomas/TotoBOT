'use client'

import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { useAppSelector } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { increment } from "@/lib/features/appSlice";
import { useTranslation } from "react-i18next";

export default function Home() {

    const dispatch = useDispatch();

    const { t , i18n} = useTranslation();

    const appSlice = useAppSelector((state) => state.app);
    const value = appSlice.value;

    return (
        <div>
            <SwitchThemeButton />
            <div>{value}</div>
            <Button onClick={() => dispatch(increment())}>Click me</Button>
            <Button onClick={() => i18n.changeLanguage("fr")}>{t("test")}</Button>
        </div>
    );
}
