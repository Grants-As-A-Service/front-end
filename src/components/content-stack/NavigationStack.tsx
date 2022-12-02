import React, { useEffect, useState } from "react";
import { StackProps } from "../../types";
import EventManager from "../../utils/EventManager";

export default function createStackNavigator<T>() {
    const eventManager = new EventManager();
    const swapScreen = (screenName: T, props?: any) => {
        eventManager.emit("activate-screen", { screenName, props });
    };
    return {
        swapScreen,
        StackItem: function ({ Component, name }: StackProps<T>) {
            const [active, setActive] = useState(false);
            const [props, setProps] = useState({});

            useEffect(() => {
                const listener = (event: any) => {
                    console.log(event);
                    if (event.screenName === name && !active) {
                        setActive(true);
                        if (event.props) {
                            setProps(event.props);
                        }
                    }
                    if (event.screenName !== name && active) {
                        setActive(false);
                    }
                };

                eventManager.addListener("activate-screen", listener);

                return () => eventManager.removeListener("activate-screen", listener);
            });

            return active ? <Component swapScreen={swapScreen} {...props} /> : <></>;
        },
        NavigationStack: function ({ children, intialItem }: { children: React.ReactNode; intialItem: string }) {
            useEffect(() => {
                swapScreen(intialItem as T);
            }, []);

            return <>{children}</>;
        },
    };
}
