import { MessageItem } from "@/components/messages/MessageItem";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/lib/hooks";

type Props = {
    className?: string
}

export const MessageBox = ({ className }: Props) => {

    const appSlice = useAppSelector((state) => state.app);
    const messages = appSlice.messages;

    return (
        <div className={cn(
            "flex-1 flex flex-col justify-end rounded-md my-2",
            className
        )}>
            {messages.map((message, index) => (
                <MessageItem
                    key={index}
                    message={message}
                    className={cn(
                        "my-3", // espace entre les messages
                        { "self-start  bg-darker": index % 2 !== 0 }, // messages pairs alignés à gauche
                        { "self-end": index % 2 === 0 }    // messages impairs alignés à droite
                    )}
                />
            ))}
        </div>
    );
};