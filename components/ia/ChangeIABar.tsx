import { cn } from "@/lib/utils";

type Props = {
    className?: string
}

export const ChangeIABar = ({className}: Props) => {
    return (
        <div className={cn("bg-darker/60 rounded-md p-3", className)}>
            <h1 className={"text-white"}>Change IA Bar</h1>
        </div>
    )
}