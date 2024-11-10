"use client";

import { ChangeIABar } from "@/components/ia/ChangeIABar";
import { SendMessageInput } from "@/components/inputs/SendMessageInput";
import { MessageBox } from "@/components/messages/MessageBox";
import { useToast } from "@/hooks/use-toast";
import { addMessage, setError, setIsRequesting, setMessages } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {

    const dispatch = useAppDispatch();

    const { toast } = useToast();

    const { t } = useTranslation();

    const appSlice = useAppSelector((state) => state.app);
    const messages = appSlice.messages;
    const geminiApiKey = appSlice.gemini.apiKey;
    const error = appSlice.error;
    
    const requestAI = async () => {        
        if (geminiApiKey) {
            try {
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
            } catch (error: any) {
                const errorMessage = error.message.match(/\[400 \] (.*?) \[/)?.[1] || error.message;
                dispatch(setError(errorMessage));
            }
        }
    }; 

    useEffect(() => {
        if (messages.length % 2 !== 0 && messages.length > 0) {
            requestAI();
        }
    }, [messages]);

    useEffect(() => {
        if (error) {
            dispatch(setIsRequesting(false));
            dispatch(setMessages([]))
            toast({
                title: t("Error"),
                description: error,
                variant: "destructive",
            });
            dispatch(setError(null))
        }
    }, [error]);

    return (
        <div className="flex-1 bg-background flex flex-col justify-end px-5 pb-8 max-h-[calc(100vh-6rem)]">
            <ChangeIABar className={"mt-4"} />
            <MessageBox className={"pb-12 flex-1"} />
            <SendMessageInput />
        </div>
    );
}
