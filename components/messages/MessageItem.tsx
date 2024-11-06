"use client";

import { cn } from "@/lib/utils";

type Props = {
    message: string;
    className?: string;
    ref?: any;
};

export const MessageItem = ({ message, className, ref }: Props) => {
    return (
        <div ref={ref} className={cn("bg-primary w-fit max-w-full px-12 py-4 rounded-md", className)}>
            <p className="text-white break-words">{message}</p>
        </div>
    );
};
