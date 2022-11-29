import React, { useEffect, useState } from "react";

export type SwapScreenADT = (screenName: string) => void;

type StackProps = {
    Component: ({ swapScreen }: { swapScreen: SwapScreenADT }) => JSX.Element;
    name: string;
};

export const swapScreen = (screenName: string) => {
    window.dispatchEvent(new CustomEvent("activate-screen", { detail: { args: screenName } }));
};

export const StackItem = ({ Component, name }: StackProps) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const listener = (event: any) => {
            let screenName = event.detail.args;
           
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

    return <>{active ? <Component swapScreen={swapScreen} /> : <></>}</>;
};

export const NavigationStack = ({ children, intialItem }: { children: React.ReactNode; intialItem: string }) => {
    
    useEffect(() => {
        window.dispatchEvent(new CustomEvent("activate-screen", { detail: { args: intialItem } }));
    }, []);

    return <div className="fitParent" style={{ overflow: 'auto' }}>{children}</div>;
};
