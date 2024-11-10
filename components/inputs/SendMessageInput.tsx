import { addMessage } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const SendMessageInput = () => {

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const appSlice = useAppSelector((state) => state.app);
  const isRequesting = appSlice.isRequesting;
  const messages = appSlice.messages;

  const [message, setMessage] = useState("");

  const disabled = isRequesting || messages.length % 2 !== 0;

  const handleSubmit = (value: string) => {
    if (value && value.trim() !== "") {
        dispatch(addMessage(value));
        setMessage("");
    }
};

  return (
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
                    disabled={disabled}
                />
                <Button
                    className="ml-2 min-h-ful h-24"
                    onClick={() => {
                        handleSubmit(message);
                    }}
                    disabled={disabled}>
                    Envoyer
                </Button>
            </div>
  )
}