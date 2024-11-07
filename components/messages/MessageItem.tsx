"use client";

import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

type Props = {
    message: string;
    className?: string;
    ref?: any;
};

export const MessageItem = ({ message, className, ref }: Props) => {
    return (
        <div ref={ref} className={cn("bg-primary w-fit max-w-full px-12 py-4 rounded-md", className)}>
            <Markdown
                className="text-white break-words"
                remarkPlugins={[remarkBreaks]} // Ajouter remarkGfm ici
            >
                {message}
            </Markdown>
        </div>
    );
};
