import { activateBanner } from "../components/items/banner";
import { activateLoader } from "../components/items/loader";
import { Account } from "../providers/AuthProvider";
import { ProjectADT } from "../types";
import { Requestor } from "./Requestor";
import { connect } from "./ServerHandler";

const manageUiConnection = (args: Requestor): Promise<any> => {
    let promise = connect(args);
    promise.catch((message) => {
        activateBanner("red", message);
    });
    activateLoader(promise)
    return promise
};

export const registerWithServer = (account: Account) => {
    return manageUiConnection(new Requestor("/testRegister", "post", account));
};

export const getProjects = () => {
    return new Promise<Array<ProjectADT>>((resolve, reject) => {
        setTimeout(() => {
            resolve([]);
        }, 500);
    });
};
