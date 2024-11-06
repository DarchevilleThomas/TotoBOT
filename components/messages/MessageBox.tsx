import { MessageItem } from "@/components/messages/MessageItem";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/lib/hooks";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";

type Props = {
    className?: string;
}

export const MessageBox = ({ className }: Props) => {
    const appSlice = useAppSelector((state) => state.app);
    const messages = appSlice.messages;

    return (
        <ScrollArea className={cn(
            "flex flex-col justify-end rounded-md my-2 max-h-full", // Ajout de w-full pour occuper toute la largeur
            className
        )}>
            {messages.map((message, index, row) => (
                <MessageItem
                    key={index}
                    message={message}
                    className={cn(
                        "my-3 mx-8",  // Espacement entre les messages avec marge de base (mx-4 pour la marge horizontale)
                        {
                            // Messages alignés à gauche pour les indices pairs
                            "self-start mr-auto bg-darker": index % 2 === 0, // messages à gauche

                            // Messages alignés à droite pour les indices impairs
                            "self-end ml-auto": index % 2 !== 0  // messages à droite
                        }
                    )}
                />
            ))}
        </ScrollArea>
    );
};
