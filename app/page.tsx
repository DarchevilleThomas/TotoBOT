"use client";

import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { MessageBox } from "@/components/messages/MessageBox";

export default function Home() {

    const { t } = useTranslation();


    return (
        <div className="flex-1 flex flex-col justify-end px-5 pb-8">
            <MessageBox />
            <Input
                placeholder={t("Send a message to the TOTOBOT")}
            />
        </div>
    );
}
