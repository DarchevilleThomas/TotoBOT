"use client";

import { setGeminiApiKey, setMessages, setSettingModal } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { APIKeysEnum } from "@/types/APIKeysEnum";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChangeAPIKey } from "../inputs/ChangeAPIKey";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";

export const SettingModal = () => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const appSlice = useAppSelector((state) => state.app);
    const open = appSlice.modals.setting;
    const gemini = appSlice.gemini.apiKey;

    const [geminiKey, setGeminiKey] = useState(gemini || "");

    const handleSubmitGemini = () => {
        dispatch(setGeminiApiKey(geminiKey));
        localStorage.setItem(APIKeysEnum.GEMINI, geminiKey);
    }

    const handleSubmit = () => {
        handleSubmitGemini();
        dispatch(setSettingModal(false));
        dispatch(setMessages([]));
    }

    useEffect(() => {
        if (gemini) {
            setGeminiKey(gemini);
        }
    }, [gemini]);

    return (
        <Dialog open={open} onOpenChange={() => dispatch(setSettingModal(false))}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>{t("AI Settings")}</DialogTitle>
                    <DialogDescription>{t("Enter your API Keys for the IA of your choice.")}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <ChangeAPIKey name="Gemini" APIKeyValue={geminiKey} setAPIKeyFunction={setGeminiKey} />
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>{t("Save")}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
