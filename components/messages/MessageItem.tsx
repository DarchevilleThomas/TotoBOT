import { cn } from "@/lib/utils";

type Props = {
    message: string;
    className?: string;
}

export const MessageItem = ({ message, className }: Props) => {

    return (
    <div className={cn('bg-primary w-fit px-12 py-4 rounded-md', className)}>
        <text className={"text-white"}>{message}</text>
    </div>
    )
}