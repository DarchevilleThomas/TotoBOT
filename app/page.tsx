"use client";

import { ChangeIABar } from "@/components/ia/ChangeIABar";
import { MessageBox } from "@/components/messages/MessageBox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addMessage, setIsRequesting } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {

    const [message, setMessage] = useState("");

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const appSlice = useAppSelector((state) => state.app);
    const isRequesting = appSlice.isRequesting;
    const messages = appSlice.messages;
    const geminiApiKey = appSlice.gemini.apiKey;
    
    const requestAI = async () => {        
        if (geminiApiKey) {
            const message = messages[messages.length - 1];
            const genAI = new GoogleGenerativeAI(geminiApiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const history = messages.map((message, index) => ({
                role: index % 2 !== 0 && index !== messages.length - 1 ? "model" : "user",
                parts: [{ text: message }],
            }));

            const chat = model.startChat({
                history: history,
            });

            dispatch(setIsRequesting(true));
            const result = await chat.sendMessage(message);
            dispatch(setIsRequesting(false));

            dispatch(addMessage(result.response.text()));
        }
    }; 

    useEffect(() => {
        if (messages.length % 2 !== 0 && messages.length > 0) {
            requestAI();
        }
    }, [messages]);

    const handleSubmit = (value: string) => {
        if (value && value.trim() !== "") {
            dispatch(addMessage(value));
            setMessage("");
        }
    };

    return (
        <div className="flex-1 bg-background flex flex-col justify-end px-5 pb-8 max-h-[calc(100vh-6rem)]">
            <ChangeIABar className={"mt-4"} />
            <MessageBox className={"pb-12 flex-1"} />
            <div className="flex flex-row">
                <Textarea
                    placeholder={t("Send a message to the TOTOBOT")}
                    cols={4}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            handleSubmit(message);
                        }
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={"bg-foreground/10 h-24 pr-24 resize-none scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"}
                    disabled={isRequesting}
                />
                <Button
                    className="ml-2 min-h-ful h-24"
                    onClick={() => {
                        handleSubmit(message);
                    }}
                    disabled={isRequesting}>
                    Envoyer
                </Button>
            </div>
        </div>
    );
}
