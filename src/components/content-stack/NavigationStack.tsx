import React, { useEffect, useState } from "react";
import { StackProps } from "../../types";
import EventManager from "../../utils/EventManager";

export default function createStackNavigator<T>() {
    const eventManager = new EventManager();
    const swapScreen = (screenName: T) => {
        eventManager.emit("activate-screen", screenName);
    }
    return {
        swapScreen,
        StackItem: function({ Component, name }: StackProps<T>){
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
        },
        NavigationStack: function({ children, intialItem }: { children: React.ReactNode; intialItem: string }) {
            useEffect(() => {
                eventManager.emit("activate-screen", intialItem);
            }, []);
        
            return <>{children}</>;
        }
    }
}




