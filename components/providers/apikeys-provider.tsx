"use client";

import { setGeminiApiKey } from "@/lib/features/appSlice";
import { useAppDispatch } from "@/lib/hooks";
import { APIKeysEnum } from "@/types/APIKeysEnum";
import { useEffect } from "react";

export const APIKeysProvider = ({ children }: { children: React.ReactNode }) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const geminiApiKey = localStorage.getItem(APIKeysEnum.GEMINI);
        if (geminiApiKey) {
            dispatch(setGeminiApiKey(geminiApiKey));
        }
    }, []);

    return <>{children}</>;
}