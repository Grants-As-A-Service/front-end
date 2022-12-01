import { useEffect, useState } from "react";
import { Spinner, Modal } from "reactstrap";
import EventManager from "../../utils/EventManager";

let eventManager = new EventManager();

export const activateLoader = (promise: Promise<any>) => {
    eventManager.emit("activate-loader", promise);
};

export function Loader() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const listener = async (promise: Promise<any>) => {
            setOpen(true);
            await promise;
            setOpen(false);
        };

        eventManager.addListener("activate-loader", listener);

        return () => eventManager.removeListener("activate-loader", listener);
    });

    return isOpen ? (
        <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", right: 0, top: 0 }}>
                <Spinner
                    style={{
                        height: "3rem",
                        width: "3rem",
                    }}
                ></Spinner>
            </div>
        </div>
    ) : (
        <></>
    );
}
