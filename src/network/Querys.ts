import { activateBanner } from "../components/items/banner";
import { activateLoader } from "../components/items/loader";
import { Account } from "../providers/AuthProvider";
import { ProjectADT } from "../types";
import { RequestBuilder, Requestor } from "./Requestor";
import { connect } from "./ServerHandler";
import Cache from "./Cache";

const manageUiConnection = (args: Requestor): Promise<any> => {
    let promise = connect(args);
    promise.catch((message) => {
        console.log(message)
        activateBanner(JSON.stringify(message), "red");
    });
    activateLoader(promise)
    return promise
};

export const registerWithServer = (account: Account) => {
    return manageUiConnection(
        new RequestBuilder()
            .setURL("/testRegister")
            .setMethod("POST")
            .setBody(account)
            .build()
    );
};

export const getProjects = () => {
    return manageUiConnection(
        new RequestBuilder()
            .setURL('/testProjects')
            .setMethod('GET')
            .setResponseType('JSON')
            .build()
    )
};


export const onBoardProject = (project: ProjectADT) => {
    console.log(project)
    return manageUiConnection(
        new RequestBuilder()
            .setURL('/project/create')
            .setMethod('GET')
            .setBody(project)
            .build()
    )
}