import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export type ChangeAPIKeyProps = {
    name: string;
    APIKeyValue: string;
    setAPIKeyFunction: (value: string) => void;
    className?: string;
};

export const ChangeAPIKey = ({ name, APIKeyValue, setAPIKeyFunction, className }: ChangeAPIKeyProps) => {

    return (
        <div className={cn("grid grid-cols-4 items-center gap-4", className)}>
            <Label htmlFor={name} className="text-right">
                {name}
            </Label>
            <Input id={name} value={APIKeyValue} onChange={(e) => setAPIKeyFunction(e.target.value)} className="col-span-3" />
        </div>
    );
};
