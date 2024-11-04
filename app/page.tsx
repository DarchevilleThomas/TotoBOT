'use client'

import { useAppSelector } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { increment } from "@/lib/features/appSlice";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Home() {

    const dispatch = useDispatch();

    const { t , i18n} = useTranslation();

    const appSlice = useAppSelector((state) => state.app);
    const value = appSlice.value;

    useEffect(() => {
    }, []);

    return (
        <div>
            <div>{value}</div>
            <Button onClick={() => dispatch(increment())}>Click me</Button>
            <Button onClick={() => i18n.changeLanguage("fr")}>{t("test")}</Button>
        </div>
    );
}
