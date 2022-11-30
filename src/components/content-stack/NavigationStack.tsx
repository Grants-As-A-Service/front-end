import React, { useEffect, useState } from "react";
import EventManager from "../../utils/EventManager";

export type SwapScreenADT = (screenName: string) => void;

const eventManager = new EventManager()

type StackProps = {
    Component: ({ swapScreen }: { swapScreen: SwapScreenADT }) => JSX.Element;
    name: string;
};

export const swapScreen = (screenName: string) => {
    eventManager.emit("activate-screen", screenName);
};

export const StackItem = ({ Component, name }: StackProps) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const listener = (screenName: any) => {
            if (screenName === name && !active) {
                setActive(true);
            }
            if (screenName !== name && active) {
                setActive(false);
            }
        };

        eventManager.addListener("activate-screen", listener);

        return () => eventManager.removeListener("activate-screen", listener);
    });

    return active ? <Component swapScreen={swapScreen} /> : <></>;
};

export const NavigationStack = ({ children, intialItem }: { children: React.ReactNode; intialItem: string }) => {
    useEffect(() => {
        eventManager.emit("activate-screen", intialItem);
    }, []);

    return (
        <div className="fitParent" style={{ overflow: "auto" }}>
            {children}
        </div>
    );
};
