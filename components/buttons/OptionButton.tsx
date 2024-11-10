import { setSettingModal } from "@/lib/features/appSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { Button } from "../ui/button";

export const OptionButton = () => {

    const dispatch = useAppDispatch();

    return (
        <Button variant="default" size="icon" onClick={() => dispatch(setSettingModal(true))}>
            <Image src="/icons/settings.svg" alt="settings" width={24} height={24} />
        </Button>
    );
};
