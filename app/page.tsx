'use client'

import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { useAppSelector } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { increment } from "@/lib/features/appSlice";

export default function Home() {

    const dispatch = useDispatch();

    const appSlice = useAppSelector((state) => state.app);
    const value = appSlice.value;

    return (
        <div>
            <SwitchThemeButton />
            <div>{value}</div>
            <Button onClick={() => dispatch(increment())}>Click me</Button>
        </div>
    );
}
