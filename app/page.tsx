"use client";

import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { MessageBox } from "@/components/messages/MessageBox";
import { useAppDispatch } from "@/lib/hooks";
import { addMessage } from "@/lib/features/appSlice";
import { ChangeIABar } from "@/components/ia/ChangeIABar";

export default function Home() {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && e.currentTarget.value) {
            dispatch(addMessage(e.currentTarget.value));
            e.currentTarget.value = "";
        }
    }

    return (
        <div className="flex-1 bg-background flex flex-col justify-end px-5 pb-8 max-h-[calc(100vh-6rem)]">
            <ChangeIABar className={"mt-4"} />
            <MessageBox className={"pb-12 flex-1"} />
            <Input
                placeholder={t("Send a message to the TOTOBOT")}
                className={"p-6 bg-foreground/10"}
                onKeyDown={handleInput}
            />
        </div>
    );
}
