import React, { useEffect, useState } from "react";

export type SwapScreen = (screenName: string) => void;

type StackProps = {
    Component: ({ swapScreen }: { swapScreen: SwapScreen }) => JSX.Element;
    name: string;
};

export const StackItem = ({ Component, name }: StackProps) => {
    const [active, setActive] = useState(false);

    const SwapScreen = (screenName: string) => {
        window.dispatchEvent(new CustomEvent("activate-screen", { detail: { args: screenName } }));
    };

    useEffect(() => {
        const listener = (event: any) => {
            let screenName = event.detail.args;
            console.log("getting activate", screenName);
            if (screenName === name && !active) {
                setActive(true);
            }
            if (screenName !== name && active) {
                setActive(false);
            }
        };

        window.addEventListener("activate-screen", listener);

        return () => window.removeEventListener("activate-screen", listener);
    });

    return <div>{active ? <Component swapScreen={SwapScreen} /> : <></>}</div>;
};

export const NavigationStack = ({ children, intialItem }: { children: React.ReactNode; intialItem: string }) => {
    useEffect(() => {
        window.dispatchEvent(new CustomEvent("activate-screen", { detail: { args: intialItem } }));
    }, []);

    return <>{children}</>;
};
