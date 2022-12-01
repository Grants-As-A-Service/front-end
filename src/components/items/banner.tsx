import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import EventManager from "../../utils/EventManager";

let eventManager = new EventManager();

type BannerColor = "blue" | "grey" | "green" | "red";

export const activateBanner = (text: string, color: BannerColor) => {
    eventManager.emit("activate-banner", {
        color: (() => {
            switch (color) {
                case "blue":
                    return "primary";
                case "grey":
                    return "secondary";
                case "red":
                    return "danger";
                default:
                    return "";
            }
        })(),
        text,
    });
};

export function Banner() {
    const [isOpen, setOpen] = useState(false);
    const [color, setColor] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        const listener = (data: any) => {
            setColor(data.color);
            setText(data.text);
            setOpen(true);
            setTimeout(() => setOpen(false), 2000);
        };

        eventManager.addListener("activate-banner", listener);

        return () => eventManager.removeListener("activate-banner", listener);
    });

    return (
        <Alert color={color} isOpen={isOpen}>
            {text}
        </Alert>
    );
}
